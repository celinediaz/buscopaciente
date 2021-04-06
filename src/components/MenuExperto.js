import React, { useState } from 'react';
import {Form, Modal, Button} from 'react-bootstrap'
import moment from 'moment';
import Calendar from './Calendar';

const MenuExperto = () => {
   
    return (
        <div className="App">
      <header className="App-header">

      <div class="encabezado_menu_experto">
          <h1 className="bienvenida_experto">Bienvenida, Genoveva</h1>
          <h3 className="pregunta_exeprto">¿Qué deseas hacer?</h3>
      </div>
      </header>

      <div className="menu_experto">
        <Container>
          <Row xs={2} md={2} lg={2}>
            <div className="botones_menu_experto">
            <Col> 
            <div className="boton_editar_datos"><Button variant="primary" size="lg" block>Editar mis datos</Button> </div>
            <div className="boton_ver_citas"><Button variant="primary" size="lg" block>Ver mis citas</Button> </div>
            <div className="boton_ver_expedientes"><Button variant="primary" size="lg" block>Ver expedientes</Button> </div>
            <div className="boton_admin"><Button variant="primary" size="lg" block> Añadir admin</Button> </div>
            </Col>
            </div>

            <Col> 
            <img src="https://1.bp.blogspot.com/-dF3qJRYNzxU/YGsx1ZNVCuI/AAAAAAAAAXs/us1tV0MtQdMZdxbHhN5T0kt3cTyJbq1yQCLcBGAsYHQ/s320/undraw_medical_research_qg4d.png" width="600" height="400"/>
            </Col>
          </Row>
        </Container>  
      </div>

    </div>
    )
}

export default MenuExperto
