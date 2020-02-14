import styled from 'styled-components';
import BannerPreviousBox from '../../assets/previous.png';
import BannerMobile from '../../assets/previous-mobile.png';
import BannerMini from '../../assets/previous-mini.png';

export const Banner = styled.div`
  background: url(${BannerPreviousBox}) 100% no-repeat;
  background-size: cover;
  width: 100%;
  height: 284px;
  @media screen and (min-width: 600px) and (max-width: 900px) {
    background: url(${BannerMobile}) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 300px) and (max-width: 599px) {
    background: url(${BannerMini}) no-repeat;
    background-size: cover;
  }
`;
