import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  background: rgb(13, 44, 84);
  background: linear-gradient(
    180deg,
    rgba(13, 44, 84, 1) 0%,
    rgba(200, 206, 213, 0) 97%
  );
  padding: 0 30px;

  img#logo {
    margin-right: 20px;
    padding-right: 20px;
    height: 80px;
  }
  #associe {
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border: 0;
    background: rgba(0, 178, 246, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin: -5px 25px;
  }
`;

export const Content = styled.div`
  height: 100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-basis: initial;
  align-items: center;
  justify-content: space-around;
`;

export const ItemMenu = styled(NavLink)`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 30px;

  &:hover {
    text-decoration: none;
    color: #fff;
    text-shadow: 2px 2px 3px #444;
  }
  .item {
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');

  display: flex;
  justify-content: right;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      display: block;
      color: #666666;
    }
  }
`;
