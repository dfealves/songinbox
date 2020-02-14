import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Gift from '../../assets/gift.png';
import BoxFanzinho from '../../assets/kit-fanzinho.png';
import BoxFanzao from '../../assets/kit-fanzao.png';
import NumberOne from '../../assets/number-one.png';
import Singer from '../../assets/singer.png';

import { Container, Banner, Content, KitFanzinho, KitFanzao } from './styles';

export default function Main() {
  return (
    <>
      <Banner>
        <Header />
        <Container>
          <div />
          <div className="row div-banner">
            <div className="col-sm-12 ">
              <h1>SongInBox</h1>
              <p className="pt-2">
                Produtos selecionados do seu cenário <br />
                musical favorito entregues diretamente <br />
                na sua casa.
              </p>
              <Link
                to="/partner"
                style={{
                  textDecoration: 'none',
                }}
              >
                <button type="button" className="pl-5 pr-5">
                  Associe-se
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Banner>
      <Content>
        <div className="container pb-5 mb-5">
          <div className="row como-funciona mb-5">
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
      <svg
        width="100%"
        height="100%"
        viewBox="-20 -20 1366 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M-425 124C-404.224 120.827 -417 96.3021 -336.289 80.7375C-255.577 65.1729 -193.104 60.4406 -107.869 57.0336C52.2108 50.7213 217.398 68.0153 374.677 57.2239C506.423 48.2137 615.38 20.6038 744.092 8.30773C803.94 2.59206 866.209 0.352493 929.034 0.352493H937.146C944.927 0.381317 952.65 0.438965 960.314 0.525436C1024.01 1.23449 1087.98 4.02744 1150.42 7.59866C1347.59 18.8398 1549.26 86.0656 1700 124C375.677 122.647 690.5 124 -425 124Z"
          fill="#00B2F6"
        />
      </svg>

      <KitFanzinho>
        <div className="container">
          <div className="row fanzinho">
            <div className="col-sm-4 text-center info-fanzinho">
              <h2>Cassete Box</h2>
              <p>O box conterá 1 produto premium e 2 básicos.</p>
              <h1>R$ 34,99</h1>
              <span>*por 6 meses</span> <br />
              <Link
                to="/partner"
                style={{
                  textDecoration: 'none',
                }}
              >
                <button
                  type="button"
                  className="pl-5 pr-5"
                  style={{
                    width: '194px',
                    height: '66.63px',
                    background: '#00B2F6',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '30px',
                    border: '0',
                    color: '#fff',
                    fontSize: '20px',
                  }}
                >
                  Associe-se
                </button>
              </Link>
            </div>
            <div className="col-sm-8">
              <img className="img-fluid" src={BoxFanzinho} alt="" />
            </div>
          </div>
        </div>
      </KitFanzinho>
      <svg
        width="100%"
        height="100%"
        viewBox="10 10 1366 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d="M-285 0C-264.224 2.41254 -277 21.0566 -196.289 32.8892C-115.577 44.7219 -53.1035 48.3195 32.1306 50.9095C192.211 55.7083 357.398 42.561 514.677 50.7649C646.423 57.6147 755.38 78.6045 884.092 87.9522C943.94 92.2974 1006.21 94 1069.03 94H1077.15C1084.93 93.9781 1092.65 93.9343 1100.31 93.8685C1164.01 93.3295 1227.98 91.2062 1290.42 88.4913C1487.59 79.9455 1689.26 28.8387 1840 0C515.677 1.02821 830.5 0 -285 0Z"
          fill="#00B2F6"
        />
      </svg>
      <KitFanzao>
        <div className="container">
          <div className="row fanzinho">
            <div className="col-sm-8">
              <img className="img-fluid" src={BoxFanzao} alt="" />
            </div>
            <div className="col-sm-4 text-center info-fanzao">
              <h2>Vinil Box</h2>
              <p>O box conterá 2 produtos premium e 3 básicos.</p>
              <h1>R$ 49,99</h1>
              <span>*por 6 meses</span> <br />
              <Link
                to="/partner"
                style={{
                  textDecoration: 'none',
                }}
              >
                <button
                  type="button"
                  className="pl-5 pr-5"
                  style={{
                    width: '194px',
                    height: '66.63px',
                    background: '#00B2F6',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '30px',
                    border: '0',
                    color: '#fff',
                    fontSize: '20px',
                  }}
                >
                  Associe-se
                </button>
              </Link>
            </div>
          </div>
        </div>
      </KitFanzao>
      <Footer />
    </>
  );
}
