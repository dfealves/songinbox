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
                <span
                  className="mr-2"
                  id="firstItem"
                  style={{
                    background: '#f6511d',
                    borderRadius: '50%',
                    fontFamily: 'Istok Web',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineheight: '23px',
                    padding: '5px 10px',
                    color: '#141414',
                  }}
                >
                  1
                </span>
                SongInBox
              </li>
              <li>
                <span
                  className="mr-2"
                  id="purchase-item"
                  style={{
                    background: '#ffb400',
                    borderRadius: '50%',
                    fontFamily: 'Istok Web',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineheight: '23px',
                    padding: '5px 10px',
                    color: '#141414',
                  }}
                >
                  2
                </span>
                Identificação
              </li>
              <li>
                <span
                  className="mr-2"
                  id="purchase-item"
                  style={{
                    background: '#ffb400',
                    borderRadius: '50%',
                    fontFamily: 'Istok Web',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineheight: '23px',
                    padding: '5px 10px',
                    color: '#141414',
                  }}
                >
                  3
                </span>
                Entrega
              </li>
              <li>
                <span
                  className="mr-2"
                  id="purchase-item"
                  style={{
                    background: '#ffb400',
                    borderRadius: '50%',
                    fontFamily: 'Istok Web',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineheight: '23px',
                    padding: '5px 10px',
                    color: '#141414',
                  }}
                >
                  4
                </span>
                Pagamento
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Body>
  );
}
