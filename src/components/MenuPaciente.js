import React, { useState } from 'react';
import {Nav, Navbar, Image, Container, Row, Col, Button} from 'react-bootstrap'

const MenuPaciente = () => {
   
    return (
      <div className="App">
      <header className="App-header">

        <div class="encabezado_menu_paciente">
          <h1 class="titulo_encabezado">Bienvenido a BuscoPaciente</h1>
          <h3 className="pregunta_paciente">¿Qué deseas hacer? </h3>
        </div>
        
      </header>

      <div className="contenedor_menu_paciente">
        <Container>
        <Row xs={2} md={2} lg={2}>
            <div className="botones_paciente">
            <Col> 
              <div className="agendar_cita_paciente"><Button variant="primary" size="lg" block>Agendar cita </Button> </div>
              <div className="ver_citas_paciente"><Button variant="primary" size="lg" block >Ver mis citas</Button> </div>
            </Col>
            </div>

            <Col> 
            <img src="https://1.bp.blogspot.com/-7pjLpsqvE4E/YGs0KPKnPMI/AAAAAAAAAX0/E_or4WsbUhomRTGdODJq2ysy7UGt7g09gCLcBGAsYHQ/w474-h337/undraw_doctor_kw5l.png" width="600" height="400"/>

            </Col>

          </Row>
        </Container>
      </div>

    </div>
  
    )
}

export default MenuPaciente
