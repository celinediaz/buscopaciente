import React from 'react'
import { Navbar, Nav, Image, Form, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import logo from './logo.jpeg'
import { useAuth } from "../contexts/AuthContext"

const Navb = () => {
  const history = useHistory();
  const {logout, currentUser} = useAuth()

   async function handleLogOut(){
    try {
      await logout()
      history.push("/")
    }catch{
      console.log("error")
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} width="50" height="50" className="icononav d-inline-block align-center" />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">BuscoPaciente</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
           { !currentUser && <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link> }
           { !currentUser && <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link> }
           { currentUser  && <Nav.Link as={Link} to="/menu">Menu</Nav.Link> }
           { currentUser && 
            <Form onSubmit={handleLogOut}>
            <Button variant="outline" type="submit">Log Out</Button>
            </Form> }
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Navb
