import styled from 'styled-components';
import bgFooter from '../../assets/footer-bg.png';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
  width: 100%;
  background: url(${bgFooter}) no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div.row {
    width: 100%;
    justify-content: space-between;
    height: 100%;
  }

  div.div-logo {
    display: flex;
    align-items: flex-end;
  }

  ul.social-media {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  div.footer {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #0d2c54;
    @media (max-width: 500px) {
      flex-direction: column-reverse;
    }
  }
`;
