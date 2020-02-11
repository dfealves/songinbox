import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Container, Content } from './styles';
import logoFooter from '../../assets/logo-footer.png';
import logoFacebook from '../../assets/Facebook.png';
import logoInstagram from '../../assets/Instagram.png';
import MulherFooter from '../../assets/mulher-ouvindo-musica.png';

export default function Footer() {
  return (
    <Container>
      <div className=" row">
        <div className="col-md div-logo ml-5 mr-5">
          <img src={logoFooter} id="logo-footer" alt="" />
        </div>

        <div className="col-md footer mr-5">
          <div>
            <p>Sobre a SongInBox</p>
            <p>Suporte</p>
            <ul className="social-media">
              <li>
                <img src={logoFacebook} alt="" />
              </li>
              <li>
                <img src={logoInstagram} alt="" />
              </li>
            </ul>
          </div>
          <div className="col-m-2">
            <img
              className="ml-5 img-fluid float-left"
              src={MulherFooter}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
