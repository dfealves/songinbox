import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Body } from './styles';

export default function PurchaseStatus() {
  return (
    <Body>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <ul className="order-purchase">
              <li>
                <span className="mr-2 firstItem">1</span>
                SongInBox
              </li>
              <li>
                <span className="mr-2 purchase-item">2</span>
                Identificação
              </li>
              <li>
                <span className="mr-2 purchase-item">3</span>
                Entrega
              </li>
              <li>
                <span className="mr-2 purchase-item">4</span>
                Pagamento
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Body>
  );
}
