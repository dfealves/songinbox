import React from 'react';

import Header from '../../components/Header';
import Gift from '../../assets/gift.png';
import NumberOne from '../../assets/number-one.png';
import Singer from '../../assets/singer.png';

import { Container, Banner, Content } from './styles';
import {} from 'bootstrap';

export default function Main() {
  return (
    <>
      <Banner>
        <Header />
        <Container>
          <div className="row div-banner">
            <div className="col-sm-12 ml-5 pl-5">
              <h1>SongInBox</h1>
              <p className="pt-2">
                Produtos selecionados do seu cenário <br />
                musical favorito entregues diretamente <br />
                na sua casa.
              </p>
              <button type="button" className="pl-5 pr-5">
                Associe-se
              </button>
            </div>
          </div>
        </Container>
      </Banner>
      <Content>
        <div className="container pb-5 mb-5">
          <div className="row como-funciona">
            {/* <div className="col-sm-2">
              <h1 className="text-left">Como funciona ?</h1>
            </div> */}
            <div className="col-sm-3 mt-5  text-center">
              <img className="icon-img mt-2" src={Gift} alt="" />
              <h3 className="icon-title pt-2">SongInBox</h3>
              <p className="text-descricao pt-2">
                Escolha a SongInBox que tem mais haver com seu estilo de vida.
              </p>
            </div>
            <div className="col-sm-3 mt-5  text-center">
              <img className="icon-img mt-2" src={Singer} alt="" />
              <h3 className="icon-title pt-2">Escolha seu Curador</h3>
              <p className="text-descricao pt-2">
                Conheça nosso curadores <br /> e escolha aquele que tem seu
                estilo.
              </p>
            </div>
            <div className="col-sm-3 mt-5  text-center">
              <img className="icon-img mt-2" src={NumberOne} alt="" />
              <h3 className="icon-title pt-2">Seja o Fã #1</h3>
              <p className="text-descricao pt-2">
                Descubra produtos do seu estilo favorito e compatilhe seu
                Unboxing nas suas com #SongInBox.
              </p>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
