import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  const [character, setCharacter] = useState([])

  useEffect(() => {

    axios
      .get("https://rick-api.herokuapp.com/api/")
      .then((response) => {
        setCharacter(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log('Server Error', error);
      });

  }, []);



  return (
    <section className="character-list">
      <Link to="/"><button>Home</button></Link>
      {character.map(char => (
        <CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} />
      )
      )}
    </section>
  );
}
