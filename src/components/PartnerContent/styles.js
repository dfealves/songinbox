import styled from 'styled-components';
import bgFooter from '../../assets/footer-bg.png';

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
  }

  .not-active {
    background: rgba(255, 180, 0, 0.2) !important;
  }
`;
