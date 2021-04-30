import React from 'react'
import { Container, Row, Col, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Scene from './Scene';
const MenuUsuarios = () => {

  return (
    <div>
      <h1>Registro</h1>
      <h6>Sé parte de la familia BuscoPaciente</h6>

      <Container fluid>
        <Row>
          <Col xs={6}><Scene texto={"PACIENTE"}/></Col>
          <Col xs={6}><Scene texto={"PRACTICANTE"}/></Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h4>¿Buscas doctor?</h4>
            <h6>Regístrate como paciente, es gratis</h6>
            <Button variant="primary" type="submit" as={Link} to="/signuppaciente">Registrarme</Button>
          </Col>

          <Col xs={6}>
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
