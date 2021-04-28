import React from 'react';
import { Button, Row, Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import image from "./undraw_medicine.svg";

const MenuExperto = () => {

  return (
    <div className="App">
      <h1>Bienvenido a BuscoPaciente</h1>
      <h2>¿Qué deseas hacer?</h2>
      <Container>
        <Row>
          <Col className="align-self-center">
            <Link to="/editardatosexperto">
              <Button className="my-2" size="lg" block>
                Editar mis datos
              </Button>
            </Link>
            <Link to="/vercitas">
              <Button className="my-2" size="lg" block>
                Ver mis citas
              </Button>
            </Link>
            <Link to="/expedientes">
              <Button className="my-2" size="lg" block>
                Ver expedientes
              </Button>
            </Link>
            
          </Col>

          <Col>
            <Image src={image} width="90%" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MenuExperto
