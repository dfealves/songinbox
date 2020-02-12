/* eslint-disable react/prop-types */
import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { MdDone } from 'react-icons/md';
import { Body } from './styles';

export default function PartnerContentCard({ primeiroCard, segundoCard }) {
  return (
    <>
      <Body>
        <CardDeck className="mt-5">
          <Card className="card-product text-center">
            <Card.Body>
              <Card.Title>{primeiroCard.titulo}</Card.Title>
              <Card.Text>{primeiroCard.texto}</Card.Text>
              <h3>{primeiroCard.texto2}</h3>
              <Button className="btn-product pt-2 pb-2" variant="primary">
                Quero esse
              </Button>
            </Card.Body>
          </Card>

          <Card className="card-product text-center">
            <Card.Body>
              <Card.Title>{segundoCard.titulo}</Card.Title>
              <Card.Text>{segundoCard.texto}</Card.Text>
              <h3>{segundoCard.texto2}</h3>
              <Button className="btn-product pt-2 pb-2" variant="primary">
                Quero esse
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
        <div className="row mt-3">
          <div className="col-sm-6 pl-4">
            <p className="products-title text-center">Produtos Básicos</p>
            <ul className="ml-3 ">
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Cadernos
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Adesivos
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Poster
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Broches
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Paches
              </li>
            </ul>
          </div>
          <div className="col-sm-6 pl-4">
            <p className="products-title">Produtos Premium</p>
            <ul className="ml-3">
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Camisetas
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Canecas
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Jaquetas
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Vinil
              </li>
              <li>
                <MdDone className="mr-2 ml-1" size={20} color="#FFB400" />
                Bolsas
              </li>
            </ul>
          </div>
        </div>
      </Body>
    </>
  );
}
