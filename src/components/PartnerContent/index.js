import React from 'react';

import { Row, Col, Container, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from '../../components/PartnerContentCard';
import CaixaMusica from '../../assets/caixa_musica.png';
import { Body } from './styles';


export default function PartnerContent() {
  return (
  <Body>
     <div className="container pb-5 mb-5">
          <div className="row">
            <div className="col-sm-6">
            <h2>Selecione seu plano</h2>
            <img src={CaixaMusica} className="img-partner"></img>
            </div>

            <div className="col-sm-6 ">
                <ButtonGroup className=""> 
                  <Button className="btn-plano">Semestral</Button>
                  <Button className="btn-plano mensal">Mensal</Button>                
               </ButtonGroup>
               <div className="col-sm-3">
               <Card/>
               </div>
               <div className="col-sm-3">
               <Card/>
               </div>
            </div>


          </div>
      </div>
  </Body>
  );
}
