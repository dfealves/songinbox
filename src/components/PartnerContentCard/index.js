/* eslint-disable react/prop-types */
import React from 'react';

import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function PartnerContentCard({ primeiroCard, segundoCard }) {
  return (
    <>
      <CardDeck className="mt-5">
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{primeiroCard.titulo}</Card.Title>
            <Card.Text>{primeiroCard.texto}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{segundoCard.titulo}</Card.Title>
            <Card.Text>{segundoCard.texto}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  );
}
