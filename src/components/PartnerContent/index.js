import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from '../PartnerContentCard';
import CaixaMusica from '../../assets/caixa_musica.png';
import { Body } from './styles';
export default function PartnerContent() {
  const [tipoPlano, setTipoPlano] = useState('Mensal');
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
          <div className="col-sm div-plano mt-4">
            <ButtonGroup className="justify-content-center">
              <Button
                onClick={() => setTipoPlano('Semestral')}
                className={{
                  'btn-plano': true,
                  'not-active': tipoPlano !== 'Semestral',
                }}
              >
                Semestral
              </Button>
              <Button
                onClick={() => setTipoPlano('Mensal')}
                className={{
                  'btn-plano': true,
                  'not-active': tipoPlano !== 'Mensal',
                }}
              >
                Mensal
              </Button>
            </ButtonGroup>
            <div className="col-sm ">
              <div className="col-sm">
                {tipoPlano === 'Mensal' ? (
                  <Card
                    primeiroCard={{
                      titulo: 'Cassete Box',
                      texto: 'O box conterá 1 produto premium e 2 básicos.',
                      texto2: 'R$ 40,99'
                    }}
                    segundoCard={{
                      titulo: 'Vinil Box',
                      texto: 'O box conterá 2 produtos premium e 3 básicos.',
                      texto2: 'R$ 50,99',
                    }}
                    
                  />

                ) : (
                  <Card
                    primeiroCard={{
                      titulo: 'Cassete Box',
                      texto: 'O box conterá 1 produto premium e 2 básicos.',
                      texto2: 'R$ 46,99'
                    }}
                    segundoCard={{
                      titulo: 'Vinil Box',
                      texto: 'O box conterá 2 produtos premium e 3 básicos.',
                      texto2: 'R$ 54,99',
                    }}
                    
                  />
                )}               
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}