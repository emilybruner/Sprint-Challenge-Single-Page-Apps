import React from "react";
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (

    <div>
      <Card>
        <CardBody body inverse color="success">
          <CardTitle body className="text-center">{props.name}</CardTitle>
          <CardSubtitle body className="text-center">{props.species}</CardSubtitle>
          <CardSubtitle body className="text-center">{props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
