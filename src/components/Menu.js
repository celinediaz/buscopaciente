import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import image from "./undraw_medicine.svg";
import { useAuth } from "../contexts/AuthContext"

const Menu = (user) => {
  const {currentUserdb} = useAuth()

  return (
    <div className="App">

      <h1>Bienvenido a BuscoPaciente</h1>
      <h2>¿Qué deseas hacer?</h2>
      <Container>
        <Row>
          <Col className="align-self-center">
            <Link to={currentUserdb.role ==="user" ? "/agendarcitas" : "/editardatosexperto"}>
              <Button className="my-2" size="lg" block>
              {currentUserdb.role ==="user" ? "Agendar cita" : "Editar mis datos"}
              </Button>
            </Link>
            <Link to="/vercitas">
              <Button className="my-2" size="lg" block>
                Ver mis citas
              </Button>
            </Link>
            <Link to={currentUserdb.role ==="user" ? "/editardatos" : "/expedientes"}>
              <Button className="my-2" size="lg" block>
              {currentUserdb.role ==="user" ? "Editar datos" : "Ver expedientes"}
              </Button>
            </Link>
            {currentUserdb.role ==="user" &&
            <Link to="/listacitas">
              <Button className="my-2" size="lg" block>
                Lista de citas
              </Button>
            </Link>
            }
          </Col>

          <Col>
          <Image src={image} width="90%" />
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Menu
