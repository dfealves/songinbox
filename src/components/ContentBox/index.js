import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import VinilBox from '../../assets/VinilBox-mini.png';
import CasseteBox from '../../assets/CasseteBox-mini.png';
import { Body } from './styles';

export default function ContentBox() {
  return (
    <>
      <Body>
        <Container>
          <Row id="content">
            <Col id="meses" lg={2}>
              <h5 className="mt-5">Janeiro</h5>
            </Col>
            <Col lg={10} id="time-line">
              <Row className="mb-5" id="teste">
                <Col lg={12} className="mb-3" id="info-timeLine">
                  <h5 className="ml-5 mt-5">2020</h5>
                  <h1 className="text-center">Linha do Tempo da MPB</h1>
                </Col>
                <Col>
                  <h5 className="text-center">
                    Vinil Box
                    <img className="pt-4 img-fluid" src={VinilBox} alt="" />
                  </h5>
                </Col>
                <Col>
                  <h5 className="text-center">
                    Cassete Box
                    <img className="pt-4 img-fluid" src={CasseteBox} alt="" />
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
}
