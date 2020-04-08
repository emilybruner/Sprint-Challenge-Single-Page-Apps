import React from "react";
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (

    <div className="grid">
      <div className="card" class="row justify-content-center">
        <Card>
          <CardBody body inverse color="success">
            <CardTitle body className="text-center">{props.name}</CardTitle>
            <CardSubtitle body className="text-center">Species: {props.species}</CardSubtitle>
            <CardSubtitle body className="text-center">Status: {props.status}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>

  )
}
