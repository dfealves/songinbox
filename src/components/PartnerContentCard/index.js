/* eslint-disable react/prop-types */
import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Body } from './styles';

import confirm from '../../assets/confirm.png';
export default function PartnerContentCard({ primeiroCard, segundoCard }) {
  return (
    <>
    <Body>
      <CardDeck className="mt-5">
        <Card className="card-product">
          <Card.Body>
            <Card.Title>{primeiroCard.titulo}</Card.Title>
            <Card.Text>{primeiroCard.texto}</Card.Text>
            <h3>{primeiroCard.texto2}</h3>
            <Button className="btn-product" variant="primary">Quero esse</Button>
          </Card.Body>
        </Card>

        <Card className="card-product">
          <Card.Body>
            <Card.Title>{segundoCard.titulo}</Card.Title>
            <Card.Text>{segundoCard.texto}</Card.Text>
            <h3>{segundoCard.texto2}</h3>
            <Button className="btn-product" variant="primary">Quero esse</Button>
          </Card.Body>
        </Card>        
      </CardDeck>
      <div className="row mt-3">
        <div className="col-sm-6 pl-4">
          <p className="products-title text-center">Produtos Básicos</p>
            <ul className="ml-3 text-center ">
                <li>Cadernos</li>
                <li>Adesivos</li>
                <li>Poster</li>
                <li>Broches</li>
                <li>Paches</li>
            </ul>
        </div>
        <div className="col-sm-6 pl-4">
          <p className="products-title text-center ">Produtos Premium</p>
          <ul className="ml-3 text-center">
              <li>Camisetas</li>
              <li>Canecas</li>
              <li>Jaquetas</li>
              <li>Vinil</li>
              <li>Bolsas</li>
          </ul>
        </div>
      </div>
    </Body>
    </>
  );
}