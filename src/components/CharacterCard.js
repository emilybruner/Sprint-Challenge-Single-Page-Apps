import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </div>
  )
}
