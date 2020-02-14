import styled from 'styled-components';

export const Body = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 51px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #141414;
  }

  p {
    @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-indent: 3.5em;
    color: #141414;
    margin-bottom: 0;
  }
  p + p {
    text-indent: 3.5em;
    margin-top: 0;
  }
`;
