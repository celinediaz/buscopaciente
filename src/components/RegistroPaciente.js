import React, { useState } from 'react';
import { Button, Breadcrumb, Card, Form, Row, Col, Container, Navbar, Image, Nav, H1 } from 'react-bootstrap'

const RegistroPaciente = () => {
   
    return (
        <div className="App">
      <header className="App-header">


        <div class="encabezado2">
          <h1 class="titu">Sé parte de BuscoPaciente</h1>
          <h2> Crear Cuenta</h2>
          <h5>Los datos proporcionados no serén publicados bajo ninguna circunstancia</h5>
        </div>

        <div class='formulario'>

          <Form className="formi">
            <Row md>
              <Col md>
                <Form.Label class="Name">Nombre(s):</Form.Label>
                <Form.Control placeholder="Ej. Adriana" />

                <Form.Label>Fecha de nacimiento:</Form.Label>
                <Form.Control placeholder="Ej. 9 de junio 2001" />

                <Form.Label>Religión:</Form.Label>
                <Form.Control placeholder="Ej. Católica" />

                <Form.Label>E-mail:</Form.Label>
                <Form.Control placeholder="Ej. ejemplo@gmail.com" />

                <Form.Label>Contraseña:</Form.Label>
                <Form.Control placeholder="**********" />
              </Col>

              <Col md >
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control placeholder="Ej. García" />

                <Form.Label>Dirección:</Form.Label>
                <Form.Control placeholder="Ej. Callecita 134 Colonia Rosita" />

                <Form.Label md>Enfermedades o alergias</Form.Label>
                <Form.Control placeholder="Ej. Alergia al chocolate, asma, ansiedad" />

                <Form.Label>Estado Civil:</Form.Label>
                <Form.Control placeholder="Ej. Soltera" />

                <Form.Label>Edad:</Form.Label>
                <Form.Control placeholder="Ej. 19" />


              </Col>
            </Row>
          </Form>


        </div>


        <div className="boton">
          <Button variant="primary">Siguiente</Button>
        </div>




      </header>
    </div>
       
    )
}

export default RegistroPaciente
