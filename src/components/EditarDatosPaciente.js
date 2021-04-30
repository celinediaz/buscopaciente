import React, {useRef, useState} from 'react'
import {Form, Button, Col, Row, Alert} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";

const EditarDatosPaciente = () => {
    const nameRef =useRef();
    const maritalRef =useRef();
    const ageRef =useRef();
    const religionRef =useRef();
    const numberRef =useRef();
    const birthRef =useRef();
    const addressRef =useRef();
    const lastnameRef =useRef();
    const illnessRef =useRef();
    const {updateUserInfo, deleteUser} = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    function handleSubmit(e){
      e.preventDefault()
      try{
          setError("")
          setLoading(true)
          let otherRef = {name: nameRef.current.value, maritalStatus: maritalRef.current.value, age: ageRef.current.value, religion: religionRef.current.value, birth: birthRef.current.value, lastname: lastnameRef.current.value, illnesses: illnessRef.current.value, address: addressRef.current.value, phone: numberRef.current.value}
          updateUserInfo(otherRef) 
          history.push("/") 
      } catch {
          console.log("error")
          setError("No se ha podido editar la cuenta")
      }
      setLoading(false);
  }
   
    return (
      <div className="App">
  
      <h1>Editar mis datos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
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
                <Form.Label>Edad:</Form.Label>
                <Form.Control ref={ageRef} placeholder="Ej. 19" />
                <Form.Label>Número:</Form.Label>
                <Form.Control ref={numberRef}placeholder="Ej. 8675309" />

              </Col>

              <Col>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control ref={lastnameRef} placeholder="Ej. García" />

                <Form.Label>Dirección:</Form.Label>
                <Form.Control ref={addressRef} placeholder="Ej. Callecita 134 Colonia Rosita" />

                <Form.Label>Enfermedades o alergias</Form.Label>
                <Form.Control ref={illnessRef} placeholder="Ej. Alergia al chocolate, asma, ansiedad" />

                <Form.Label>Estado Civil:</Form.Label>
                <Form.Control ref={maritalRef} placeholder="Ej. Soltera" />

            

              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={loading} className="m-2">Siguiente</Button>
            <Button variant="danger" className="mx-2" onClick ={() => deleteUser()}>Eliminar cuenta</Button>
          </Form>

        </div>
 
    </div>
    )
}

export default EditarDatosPaciente
