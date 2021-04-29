import React, {useRef, useState} from 'react'
import { Form, Button, Container, Row, Col, Image, Alert } from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
const Login = () => {
  const emailRef =useRef();
  const passRef =useRef();
  const {login} = useAuth()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    try{
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passRef.current.value) 
        history.push("/") 
    } catch {
        console.log("error")
        setError("No se ha podido iniciar sesión")
    }
    setLoading(false);
}

  return (
    <div>
      <h1>Bienvenido a BuscoPaciente</h1>
      <h2>Iniciar Sesión</h2>
      <Container>
        <Row>
          <Col className="align-self-center">
          {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passRef} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={loading}>
                Iniciar Sesión
              </Button>
              <Form.Text className="text-muted">
                ¿No tienes cuenta?{" "}
                <Link to="/signup">Regístrate en BuscoPaciente </Link>
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
