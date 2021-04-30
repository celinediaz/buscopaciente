import React from 'react';
import { Button,Form, Row, Col, Container} from 'react-bootstrap'

const Pagos = () => {
   
    return (
        
        <div className="App">
        <header className="App-header">

  
          <div class="encabezado_pagos">
            <h1 class="titulo_Agenda">Agendar cita</h1>
            <h5>Rellena los campos especificados para pagar la cita</h5>
          </div>
  
          <div className="datostarjeta">
            <Container>
              
             <Row xs={2} md={2} lg={20}>
               <div className="datos">
               <Col>
                 <Form>
                 <Form.Label class="Number">Número de tarjeta (Crédito o Débito)*</Form.Label>
                  <Form.Control className=".input-lg" placeholder="" />
  
                  <Form.Label class="Name">Titular de la tarjeta*</Form.Label>
                  <Form.Control placeholder="" />
  
                  <Row xs={2}>
                    <Col><Form.Label class="Number">Fecha de caducidad*</Form.Label>
                      <Form.Control placeholder="Mes" /></Col>
                    <Col><Form.Label className="Año"> año de la tarjeta </Form.Label>
                      <Form.Control placeholder="Año" /></Col>
                  </Row>
                  
                  <Form.Label class="Number">Código de seguridad*</Form.Label>
                  <Form.Control placeholder="" />
                 </Form>
                 </Col>
                 </div>
                 
  
  
               <Col>
               <div className="imagenes_tarjeta">
                  <Row xs={3}>
                    <Col><img src="https://1000marcas.net/wp-content/uploads/2020/03/American-Express-Logo.png" width="100" height="50" alt="AE"></img> </Col>
                    <Col><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/5718/brand.gif?itok=sA8OABYh" width="100" height="50" alt="visa"></img> </Col>
                    <Col><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" width="100" height="50" alt="MasterCard"></img></Col>
                  </Row>
  
                  <div className="resumen">
                    <p className="negritas">Resumen del pago:  </p>
                    <p className="citas">Cita: 14 de noviembre 2020   $MXN200.00</p>
                    <p className="citas">Cita: 22 de noviembre 2020   $MXN200.00</p>
                    <p className="negritas">Total: $MXN400.00 </p>
  
                    <div className="boton_realizarpago">
                      <Button class="Primary">Realizar pago</Button>
                    </div>
                  </div>
  
                </div>
               </Col>
             </Row>
             
            </Container>
  
          
          </div>
  
  
        </header>
  
        <p className="textofinal">*Los datos proporcionados estan protegidos de acuerdo a las normas del banco </p>

  
      </div>
    )
}

export default Pagos
