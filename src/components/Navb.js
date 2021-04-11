import React, {useState} from 'react'
import { Navbar, Nav, Image, Form, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import logo from './logo.jpeg'
import { useAuth } from "../contexts/AuthContext"

const Navb = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const {logout, currentUser, currentUserdb} = useAuth()

   async function handleLogOut(){
    setError("");
    try {
      await logout()
      history.push("/")
    }catch{
      console.log("error")
      setError("Error")
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} width="50" height="50" className="icononav d-inline-block align-center" />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">BuscoPaciente</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
           { !currentUser && <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link> }
           { !currentUser && <Nav.Link as={Link} to="/signup">Registrarse</Nav.Link> }
           { currentUserdb && (currentUserdb.role =="prac" ? <Nav.Link as={Link} to="/experto">Menu</Nav.Link> : <Nav.Link as={Link} to="/usuario">Menu</Nav.Link>)}
           { currentUser && 
            <Form onSubmit={handleLogOut}>
            <Button variant="outline" type="submit">Log Out</Button>
            </Form> }
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Navb
