import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Jumbotron>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <div class="row justify-content-center">
            <Link to="/characters"><Button color="primary">View Characters</Button></Link>
          </div>
        </header>
      </Jumbotron>
    </section>
  );
}
