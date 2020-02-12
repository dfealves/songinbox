import React from 'react';

import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from '../PartnerContentCard';
import CaixaMusica from '../../assets/caixa_musica.png';
import { Body } from './styles';

export default function PartnerContent() {
  return (
    <Body>
      <div className="container pb-5 mb-5 pt-5 mb-5">
        <div className="row">
          <div className="col-sm-6 selecione-plano">
            <h2>
              Selecione seu <br /> plano
            </h2>
            <img src={CaixaMusica} alt="" />
          </div>
          <div className="col-sm div-plano">
            <ButtonGroup className="justify-content-center">
              <Button className="btn-plano">Semestral</Button>
              <Button className="btn-plano mensal">Mensal</Button>
            </ButtonGroup>
            <div className="col-sm ">
              <div className="col-sm">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}
