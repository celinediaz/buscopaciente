import React, {useRef, useState} from 'react'
import { Button, Form, Row, Col} from 'react-bootstrap'
import {useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const RegistroPaciente = () => {
    const emailRef =useRef();
    const passRef =useRef();
    const nameRef =useRef();
    const maritalRef =useRef();
    const ageRef =useRef();
    const numberRef =useRef();
    const religionRef =useRef();
    const birthRef =useRef();
    const addressRef =useRef();
    const lastnameRef =useRef();
    const illnessRef =useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    async function handleSubmit(e){
      e.preventDefault()
      try{
          setError("")
          setLoading(true)
          let otherRef = {name: nameRef.current.value, maritalStatus: maritalRef.current.value, age: ageRef.current.value, religion: religionRef.current.value, birth: birthRef.current.value, lastname: lastnameRef.current.value, illnesses: illnessRef.current.value, address: addressRef.current.value, phone: numberRef.current.value}
          await signup(emailRef.current.value, passRef.current.value, "user", otherRef) 
          history.push("/") 
      } catch {
          console.log("error")
          setError("No se ha podido crear la cuenta")
      }
      setLoading(false);
  }
   
    return (
      <div className="App">
  
      <h1>Registrar paciente</h1>

        <div class='formulario'>

          <Form className="formi" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label class="Name">Nombre(s):</Form.Label>
                <Form.Control ref={nameRef} placeholder="Ej. Adriana" />

                <Form.Label>Fecha de nacimiento:</Form.Label>
                <Form.Control ref={birthRef} placeholder="Ej. 9 de junio 2001" />

                <Form.Label>Religión:</Form.Label>
                <Form.Control ref={religionRef} placeholder="Ej. Católica" />

                <Form.Label>E-mail:</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Ej. ejemplo@gmail.com" />

                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type="password" ref={passRef} placeholder="**********" />
              </Col>

              <Col>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control ref={lastnameRef} placeholder="Ej. García" />

                <Form.Label>Número:</Form.Label>
                <Form.Control ref={numberRef} placeholder="8675309" />

                <Form.Label md>Enfermedades o alergias</Form.Label>
                <Form.Control ref={illnessRef} placeholder="Ej. Alergia al chocolate, asma, ansiedad" />

                <Form.Label>Estado Civil:</Form.Label>
                <Form.Control ref={maritalRef} placeholder="Ej. Soltera" />

                <Form.Label>Edad:</Form.Label>
                <Form.Control ref={ageRef}placeholder="Ej. 19" />
              </Col>
            </Row>
            <Form.Label>Dirección:</Form.Label>
                <Form.Control ref={addressRef} placeholder="Ej. Callecita 134 Colonia Rosita" />

            <Button variant="primary" type="submit" disabled={loading} className="my-2">Siguiente</Button>
          </Form>


        </div>
 
    </div>
    )
}

export default RegistroPaciente
