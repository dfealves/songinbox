import styled from 'styled-components';
import BannerPrincipal from '../../assets/img-apresentacao.png';
import MulherMusica from '../../assets/mulher-musica.png';

export const Banner = styled.div`
  background: url(${BannerPrincipal});
  background-size: 100% 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  color: #fff;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  div.div-banner {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 8%;
  }
  div.div-banner h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;

    color: #f0f0f0;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  div.div-banner p {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #f0f0f0;
  }
  button {
    display: block;
    height: 48px;
    margin: 0 auto;
    font-family: 'Istok Web', sans-serif;
    font-weight: bold;
    font-size: 25px;
    line-height: 32px;
    display: flex;
    text-align: center;
    margin-top: 2px;
    color: #fff;
    border: 0;
    background: rgba(0, 178, 246, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
`;

export const Content = styled.div`
  background: url(${MulherMusica}) no-repeat;
  background-position-x: 100px;
  flex-wrap: wrap;
  display: flex;
  width: 100%;

  div.como-funciona {
    display: flex;
    justify-content: flex-end;
    margin-left: 20%;
  }

  div.como-funciona h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 51px;
    display: flex;
    margin-right: 80px;
    color: #141414;
  }

  div.como-funciona img {
  }

  .icon-img {
    height: 90px;
    width: 90px;
  }

  h3.icon-title {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    color: #141414;
  }
  p.text-descricao {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #141414;
  }
`;
