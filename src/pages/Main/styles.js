import styled from 'styled-components';
import BannerPrincipal from '../../assets/img-apresentacao.png';
import MulherMusica from '../../assets/mulher-musica.png';

export const Banner = styled.div`
  background: url(${BannerPrincipal}) 100% no-repeat;
  background-size: cover;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    background-size: 100% 100%;
  }
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
    @media screen and (min-width: 300px) and (max-width: 900px) {
      margin-left: 40px;
      margin-top: 0 !important;
      padding: 0 !important;
    }
  }
  div.div-banner h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    color: #f0f0f0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 300px) and (max-width: 1200px) {
      font-size: 22px;
    }
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

    @media screen and (min-width: 300px) and (max-width: 1200px) {
      font-size: 16px;
    }
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
  @media screen and (min-width: 300px) and (max-width: 1200px) {
    text-align: center;
    background: none;
    height: auto;
  }

  div.como-funciona {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-left: 20%;

    @media screen and (min-width: 300px) and (max-width: 1200px) {
      justify-content: center;
      text-align: center;
      margin-left: 0 !important;
    }
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

  div.como-funciona {
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

    text-align: center;
    color: #141414;
  }
`;

export const KitFanzinho = styled.div`
  background: #d8eaf1;
  height: 100%;
  width: 100%;

  svg {
    margin: 0;
    padding: 0;
  }

  div.info-fanzinho {
    padding-top: 15%;
  }

  div.fanzinho h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #141414;
  }

  div.fanzinho p {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #141414;
  }
  div.fanzinho h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #141414;

    div.fanzinho span {
      font-family: 'Istok Web', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #141414;
    }

    div.fanzinho button {
      background: #00b2f6;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    }
  }
`;

export const KitFanzao = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;

  div.info-fanzao {
    padding-top: 10%;
  }

  div.info-fanzao h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #141414;
  }

  div.info-fanzao p {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #141414;
  }
  div.info-fanzao h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #141414;

    div.info-fanzao span {
      font-family: 'Istok Web', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #141414;
    }

    div.info-fanzao button {
      background: #00b2f6;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    }
  }
`;
