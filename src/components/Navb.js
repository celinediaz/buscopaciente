import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.jpeg'

const Navb = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} width="50" height="50" className="icononav d-inline-block align-center" />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">BuscoPaciente</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/signup">Registrarse</Nav.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Navb
