import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Body } from './styles';

export default function SupportContent() {
  return (
    <>
      <Body className="mt-5 mb-5">
        <Container className="content">
          <Row className="justify-content-center">
            <Col sm={6} className="text-center">
              <h1>Suport SongInBox</h1>
              <p className="ml-5 pl-5">
                Telefone (xx)xxxx-xxxx <br />
                Email: suporte@songinbox.com
              </p>
            </Col>
            <Col sm={6} className="contato pt-3 pb-3">
              <h3 className="pt-2 pb-2">Converse com a gente pelo chat</h3>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Control type="text" placeholder="Nome" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                  <Form.Control type="text" placeholder="Assunto" />
                </Form.Group>
                <div className="button">
                  <button
                    type="button"
                    className="text-center pt-3 pb-3 pl-5 pr-5"
                  >
                    Entre no Chat
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
}
