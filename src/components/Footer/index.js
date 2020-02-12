import React from 'react';

import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Container, ItemMenu } from './styles';
import logoFooter from '../../assets/logo-footer.png';
import logoFacebook from '../../assets/Facebook.png';
import logoInstagram from '../../assets/Instagram.png';
import MulherFooter from '../../assets/mulher-ouvindo-musica.png';

export default function Footer() {
  return (
    <Container>
      <Row className="footer justify-content-beetwen ali">
        <Col className="div-Logo" sm={6}>
          <img src={logoFooter} alt="" />
        </Col>
        <Col sm={2} className="info">
          <ItemMenu to="/Support">
            <p>Sobre a SongInBox</p>
          </ItemMenu>
          <p>Suporte</p>
          <ul className="social-media">
            <li>
              <img className="mr-4" src={logoFacebook} alt="" />
            </li>
            <li>
              <img src={logoInstagram} alt="" />
            </li>
          </ul>
        </Col>
        <Col sm={4} className="mulherFooter">
          <img
            className="img-fluid"
            src={MulherFooter}
            width="228"
            height="223"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}
