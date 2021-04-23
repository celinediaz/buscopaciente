import React, {useRef, useState} from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";

const EditarDatosPaciente = () => {
  const emailRef =useRef();
  const passRef =useRef();
  const nameRef =useRef();
  const descRef =useRef();
  const jobRef =useRef();
  const stateRef =useRef();
  const priceRef =useRef();
  const horarioRef =useRef();
  const {signup} = useAuth()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
      e.preventDefault()
      try{
          setError("") 
          setLoading(true)
          let otherRef = {name: nameRef.current.value, desc: descRef.current.value, job: jobRef.current.value, state: stateRef.current.value, horario: horarioRef.current.value, price: priceRef.current.value}
          await signup(emailRef.current.value, passRef.current.value, "prac", otherRef) 
          history.push("/")
      } catch {
          console.log("error")
          setError("No se ha podido crear la cuenta")
      }
      setLoading(false);
  }
    const estado_civil = ['Soltero', 'Casado']
    const religion = ['Adventista del septimo día', 'Catolico', 'Otra']
   

    const credenciales = [
        {
          foto: "https://picsum.photos/171/180", nombre: "Adriana Lisette García Garza"
        },
      ]
    
      const renderPacienteCard = (credencial, index) => {
        return (
          <div key={index}>
    
            <Card className="tarjeta text-center justify-content-center">
              <Card.Img className="img " variant="center top" src={credencial.foto} roundedCircle />
              <Card.Body>
                <Card.Title className="justify-content-center">{credencial.nombre}</Card.Title>
              </Card.Body>
              <Form>
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" className="btn-sm"/>
                </Form.Group>
              </Form>
            </Card>
          </div>
        )
      }
    
    
      return (
        <div className="App">
              <h1>Editar mis datos </h1>
    
            <div class="contenedor_editardatos">
              <div className="d-flex flex-row mb-2 justify-content-center flex-fill">
    
                <div className="p-2  align-self-center">
                  {credenciales.map(renderPacienteCard)}
    
                </div>
    
                <div className="align-self-center flex-grow-1">
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Correo electrónico" />
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" ref={passRef} placeholder="Contraseña" />
                      </Form.Group>
                    </Form.Row>
    
                    <Form.Group controlId="nombre_paciente">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control ref={nameRef} placeholder="Nombre completo" />
                    </Form.Group>
    
                    <Form.Group controlId="enfermedades">
                      <Form.Label>Enfermedades o alergias:</Form.Label>
                      <Form.Control ref={descRef} placeholder="Ej: Soy diabetico/a " />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="Fecha_nacimiento">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control type="fecha" placeholder="dd/mm/aaaa" />
                            
                            <Form.Label>Estado civil:</Form.Label>
                            <Form.Control as="select" defaultValue="soltero/a" ref={jobRef}>
                          {estado_civil.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="datos">
                            <Form.Label>Numero telefonico:</Form.Label>
                            <Form.Control type="Dirección" placeholder="+52 826115896" />

                            <Form.Label>Religión:</Form.Label>
                            <Form.Control as="select" defaultValue="Otro">
                            {religion.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                        </Form.Group>

                    </Form.Row>
    
                    <Form.Group>
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control placeholder="Dirección completa con #" />

                    </Form.Group>
    
                    

                    <div className="boton_guardar_cambios">
                    <Button variant="primary" type="submit">
                      Guardar cambios
                    </Button>
                    </div>
                    <div className="boton_borrar_cuenta">
                    <Button variant="danger" type="submit">
                      Borrar cuenta
                    </Button>
                    </div>

                    
                  </Form>
                </div>
              </div>
              <br />
            </div>
        </div>
    )
}

export default EditarDatosPaciente
