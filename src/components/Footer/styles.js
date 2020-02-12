import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgFooter from '../../assets/footer-bg.png';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');

  background: url(${bgFooter}) no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 300px) and (max-width: 900px) {
    background: #d9dce0;
    text-align: center;
  }

  color: #0d2c54;

  .div-logo {
    flex-shrink: 1;
  }
  .footer {
    width: 100%;
    align-items: flex-end;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  .social-media {
    display: flex;
    list-style: none;
    flex-shrink: 1;

    @media screen and (min-width: 300px) and (max-width: 900px) {
      justify-content: center;
    }
  }

  .info {
    flex-shrink: 1;
  }

  .img-fluid {
    width: 100%;
    max-width: 390px;
    height: auto;
    min-width: 100px;
    @media screen and (min-width: 300px) and (max-width: 900px) {
      width: 50%;
    }
  }
`;

export const ItemMenu = styled(NavLink)`
  color: #0d2c54;
  &:hover {
    text-decoration: none;
  }
`;
