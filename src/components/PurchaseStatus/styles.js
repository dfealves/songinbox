import styled from 'styled-components';

export const Body = styled.div`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
  }
  #firstItem {
    background: #f6511d;
    border-radius: 50%;
    @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    padding: 5px 10px;
    color: #141414;
  }
  #purchase-item {
    background: #ffb400;
    border-radius: 50%;
    @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    padding: 5px 10px;
    color: #141414;
  }
`;
