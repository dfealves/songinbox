import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, ItemMenu } from './styles';
import logo from '../../assets/logo-menu.png';

const ActiveStyle = {
  color: '#444444',
};

export default function Header() {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="">
          <Link to="/">
            <img src={logo} id="logo" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-around"
          id="basic-navbar-nav"
        >
          <Nav className="mt-1 mb-1 text-center">
            <ItemMenu
              className="pt-1 pb-1"
              activeStyle={ActiveStyle}
              to="/Students"
            >
              Cassete Box
            </ItemMenu>
            <ItemMenu
              className="pt-1 pb-1"
              activeStyle={ActiveStyle}
              to="/Plans"
            >
              Vinil Box
            </ItemMenu>
            <ItemMenu
              className="pt-1 pb-1"
              activeStyle={ActiveStyle}
              to="/PreviousBox"
            >
              Box Anteriores
            </ItemMenu>
            <ItemMenu
              activeStyle={ActiveStyle}
              className="pb-1"
              to="/HelpOrders"
            >
              Login
            </ItemMenu>
            <ItemMenu
              activeStyle={ActiveStyle}
              className="pt-2 pb-2"
              id="associe"
              to="/Partner"
            >
              Associe
            </ItemMenu>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
