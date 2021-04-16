import React from 'react'
import { Container, Row, Col, Image, Button,} from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link} from "react-router-dom";

const MenuUsuarios = () => {

  return (
    <div>
      <h1>Registro</h1>
      <h6>Sé parte de la familia BuscoPaciente</h6>
      
      <Container>
        <Row>
          <Col>
          <Image className="align-self-center" src={image} width="70%" />
          <h4>¿Buscas alguien que te atienda?</h4>
          <h6>Regístrate como paciente, es gratis</h6>
          <Button variant="primary" type="submit" as={Link} to="/signuppaciente">Registrarme</Button>
          </Col>

          <Col>
            <Image className="align-self-center" src={image} width="70%" />
            <h4>¿Buscas paciente?</h4>
            <h6>Regístrate como practicante</h6>
            <Button variant="primary" type="submit" as={Link} to="/signuppract">Registrarme</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuUsuarios;
