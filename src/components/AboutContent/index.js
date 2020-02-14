import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ImageSobre from '../../assets/image-sobre.png';
import { Body } from './styles';

export default function AboutContent() {
  return (
    <Body>
      <Container className="mt-5">
        <Row>
          <Col sm>
            <img src={ImageSobre} width="650px" height="495" alt="" />
          </Col>
          <Col sm>
            <h1 className="">Sobre a SongInBox</h1>
            <p className="mt-1">
              {' '}
              Nós somos um clube de assinatura com materiais exclusivos de
              bandas e artistas.{' '}
            </p>{' '}
            <p>
              Sabemos que cada vez mais as pessoas querem comodidade, buscam
              exclusividade, custo benefício, querem ser surpreendidas e, o mais
              importante, não querem perder tempo.{' '}
            </p>{' '}
            <p>
              A SongInBox está aqui para te conectar novamente com a música
              através do nosso produto exclusivo, com um custo-benefício melhor
              que o mercado oferece e que ainda te surpreende.
            </p>{' '}
            <p>
              Temos dois tipos de box, que podem ser assinados por período
              semestral ou mensal. O Cassete Box que contém 3 produtos surpresas
              que podem variar entre camiseta, poster, adesivos, bloco de notas
              e broches. E o Vinil Box, que contém 5 produtos que podem variar
              entre camiseta, caneca, poster, adesivos, vinil, patches, funkos,
              bloco de notas e broches.{' '}
            </p>
            <p>
              Cada mês uma surpresa, cada mês uma novidade. Vem com a gente
              descobrir o universo da música!
            </p>
          </Col>
        </Row>
      </Container>
    </Body>
  );
}
