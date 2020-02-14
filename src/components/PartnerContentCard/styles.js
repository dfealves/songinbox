import styled from 'styled-components';

export const Body = styled.div`
  font-family: 'Montserrat', sans-serif;
  h2 {
    color: #141414;
    font-size: 44px;
  }
  div.selecione-plano {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  div.div-plano {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .btn-plano {
    background: #ffb400;
    border: none;
    width: 120px;
    height: 48px;
    color: #000000;
    border-radius: 10px 10px 10px 10px;
    font-size: 18px;
    outline: 0;
  }
  .not-active {
    background: rgba(255, 180, 0, 0.2) !important;
  }

  .card-product {
    background: rgba(0, 178, 246, 0.2);
    border-radius: 20px;
  }

  .btn-product {
    background: rgba(0, 178, 246, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 30px;
    @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;

    text-align: center;
    color: #f0f0f0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .products-title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
  ul {
    list-style: none;
    text-align: justify;
  }
  li span {
  }
  ul li {
  }

  li,
  ul,
  p.products-title {
    @media screen and (min-width: 300px) and (max-width: 1200px) {
      display: flex;
      justify-content: center;
    }
  }
`;
