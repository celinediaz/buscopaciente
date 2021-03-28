import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>Bienvenido a BUSCOPACIENTE</h1>
      <h2>Iniciar Sesión</h2>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Iniciar Sesión
              </Button>
              <Form.Text className="text-muted">
                ¿No tienes cuenta?{" "}
                <Link to="/signup">Registrate en BuscoPaciente </Link>
              </Form.Text>
            </Form>
          </Col>

          <Col>
            <Image src={image} width="90%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
