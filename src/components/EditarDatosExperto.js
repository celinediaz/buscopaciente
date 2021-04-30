import React, {useRef, useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";

const EditarDatosExperto = () => {

  const nameRef =useRef();
  const descRef =useRef();
  const jobRef =useRef();
  const stateRef =useRef();
  const priceRef =useRef();
  const {updateUserInfo, deleteUser} = useAuth()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

 function handleSubmit(e){
      e.preventDefault()
      console.log("hey")
      try{
          setError("")      
          setLoading(true)
          let otherRef = {name: nameRef.current.value, desc: descRef.current.value, job: jobRef.current.value, state: stateRef.current.value, price: priceRef.current.value}
          updateUserInfo(otherRef) 
          history.push("/")
      } catch {
          console.log("error")
          setError("No se ha podido editar la cuenta")
      }
      setLoading(false);
  }
    const tipoDoctor = ['Medicina general', 'Psicología', 'Nutrición', 'Enfermería', 'Químico', 'Dentista']
    const estado = ['Nuevo León', 'Chiapas', 'Sinaloa']
    const precio = ['Gratis', '$50', '$100', '$150', '$200', '$250']

    
      return (
        <div className="App">
              <h1>Editar datos como practicante</h1>
    
            <div className="container my-3 pb-5">
              <div className="d-flex flex-row mb-2 justify-content-center flex-fill">
 
                <div className="align-self-center flex-grow-1">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control ref={nameRef} placeholder="Nombre completo" />
                    </Form.Group>
    
                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Breve descripción de tu trabajo</Form.Label>
                      <Form.Control ref={descRef} placeholder="Ej: Estoy comprometido con brindarte una atención de calidad" />
                    </Form.Group>
    
                    <Form.Row>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Especialidad</Form.Label>
                        <Form.Control as="select" defaultValue="Medicina" ref={jobRef}>
                          {tipoDoctor.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select" defaultValue="Nuevo León" ref={stateRef}>
                        {estado.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Costo por hora</Form.Label>
                        <Form.Control as="select" defaultValue="Gratis" ref={priceRef}>
                        {precio.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" className="my-1" disabled={loading}>
                      Guardar cambios
                    </Button>
                  </Form>
                    <Button variant="danger" type="delete" className="my-1" onClick ={() => deleteUser()} >
                      Borrar cuenta
                    </Button>
                </div>
              </div>
              <br />
            </div>
        </div>
    )
}

export default EditarDatosExperto
