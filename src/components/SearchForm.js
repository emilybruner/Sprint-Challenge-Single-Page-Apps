import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(char => char.name.toLowerCase().includes(searchResults.toLowerCase())
        );
        setSearchTerm(characters);
      })
  }, [searchResults])

  const handleChange = event => {
    setSearchResults(event.target.value);
  }
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">

        {searchResults.map((char => {
          return (<CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} />)
        }
        ))}

      </div>
    </section>
  );
}
