import React, { useState } from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import moment from 'moment';

const SignupPract = () => {

    const tipoDoctor = ['Medicina general', 'Psicología', 'Nutrición', 'Nutrición', 'Enfermería', 'Químico', 'Dentista']

    const estado = ['Nuevo León', 'Tabasco', 'Sinaloa']

    const precio = ['Gratis', '$50', '$100', '$150', '$200', '$250']

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
              <h1>Registrarse</h1>
    
            <div class="container mt-3">
              <div className="d-flex flex-row mb-2 justify-content-center flex-fill">
    
                <div className="p-2  align-self-center">
                  {credenciales.map(renderPacienteCard)}
    
                </div>
    
                <div className="align-self-center flex-grow-1">
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" />
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                      </Form.Group>
                    </Form.Row>
    
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control placeholder="Nombre completo" />
                    </Form.Group>
    
                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Breve descripción de tu trabajo</Form.Label>
                      <Form.Control placeholder="Ej: Estoy comprometido con brindarte una atención de calidad" />
                    </Form.Group>
    
                    <Form.Row>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Especialidad</Form.Label>
                        <Form.Control as="select" defaultValue="Medicina">
                          {tipoDoctor.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select" defaultValue="Nuevo León">
                        {estado.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
    
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Costo del servicio por hora</Form.Label>
                        <Form.Control as="select" defaultValue="Gratis">
                        {precio.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
    
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Horario</Form.Label>
                        <Form.Control as="select" multiple>
                          <option>1 am - 2am</option>
                          <option>2 am - 3am</option>
                          <option>3 am - 4am</option>
                          <option>4 am - 5am</option>
                          <option>5 am - 6am</option>
                          <option>6 am - 7am</option>
                          <option>7 am - 8am</option>
                          <option>8 am - 9am</option>
                          <option>9 am - 10am</option>
                          <option>10 am - 11am</option>
                          <option>11 am - 12am</option>
                          <option>12 am - 1pm</option>
                          <option>1pm - 2pm</option>
                          <option>2pm - 3pm</option>
                          <option>3pm - 4pm</option>
                          <option>4pm - 5pm</option>
                          <option>5pm - 6pm</option>
                          <option>6pm - 7pm</option>
                          <option>7pm - 8pm</option>
                          <option>8pm - 9pm</option>
                          <option>9pm - 10pm</option>
                          <option>10pm - 11pm</option>
                          <option>11pm - 12pm</option>
                          <option>12pm - 1am</option>
                        </Form.Control>
                        <Form.Text id="passwordHelpBlock" muted>
                          Selecciona los horarios que tienes disponible para atender a tus pacientes. Utiliza Ctrl. y el click para seleccionarlos.
                        </Form.Text>
                      </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                      Guardar cambios
                    </Button>
                  </Form>
                </div>
              </div>
              <br />
            </div>
        </div>
    )
}

export default SignupPract
