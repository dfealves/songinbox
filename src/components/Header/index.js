import React from 'react';

import { Container, Content, Profile, ItemMenu } from './styles';
import logo from '../../assets/logo-menu.png';

const ActiveStyle = {
  color: '#444444',
};

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <nav>
          <ItemMenu activeStyle={ActiveStyle} to="/Students">
            Cassete Box
          </ItemMenu>
          <ItemMenu activeStyle={ActiveStyle} to="/Plans">
            Vinil Box
          </ItemMenu>
          <ItemMenu activeStyle={ActiveStyle} to="/Registrations">
            Box Anteriores
          </ItemMenu>
        </nav>
        <aside>
          <Profile>
            <div>
              <ItemMenu
                activeStyle={ActiveStyle}
                className="ml-5"
                to="/HelpOrders"
              >
                Login
              </ItemMenu>
              <strong />
              <button type="button" className="pl-3 pr-3">
                Associe-se
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
