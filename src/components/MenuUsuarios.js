import React, {useRef, useState} from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const MenuUsuarios = () => {
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
        history.push("/") //use a ternary operator to choose which route to go (doctor/user)
    } catch {
        console.log("error")
        setError("No se ha podido iniciar sesión")
    }
    setLoading(false);
}

  return (
    <div>
      <h1>Registro</h1>
      <h6>Sé parte de la familia BuscoPaciente</h6>
      
      <Container>
        <Row>
          <Col>
          <Image className="align-self-center hover" src={image} width="70%" />
          <h4>¿Buscas alguien que te atienda?</h4>
          <h6>Regístrate como paciente, es gratis</h6>
          </Col>

          <Col>
            <Image className="align-self-center" src={image} width="70%" />
            <h4>¿Buscas paciente?</h4>
            <h6>Regístrate como practicante</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuUsuarios;
