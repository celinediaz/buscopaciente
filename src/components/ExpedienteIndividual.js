import React, { useState } from 'react';
import { Image, Card, Form, Button, Col} from 'react-bootstrap';

const ExpedienteIndividual = () => {
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
                </Card>
            </div>
        )
    }

    const pacientes = [
        {
            fechanac: "09 junio 2001", edad: "10", estadocivil: "Soltera", domicilio: "calle rosita #123 Col.Maranatha, Montemorelos, N.L.",
            correo: "nana@gmial.com", tel: "82612345678", religion: "Adventista", issues: "Alergias, ansiedad, estrés",
            notas: "Alergias, ansiedad, estrés"
        },


    ]

    const renderPaciente = (paciente, index) => {
        return (
            <div>
                <Card className="card container d-flex flex-wrap " key={index}>
                    <div className="p-2 border">
                        <h6>Fecha de nacimiento: </h6>
                        <p>{paciente.fechanac}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Edad: </h6>
                        <p>{paciente.edad}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Estado civil: </h6>
                        <p>{paciente.estadocivil}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Correo electrónico: </h6>
                        <p>{paciente.correo}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Teléfono: </h6>
                        <p>{paciente.tel}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Domicilio: </h6>
                        <p>{paciente.domicilio}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Religión: </h6>
                        <p>{paciente.religion}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Antecedentes médicos: </h6>
                        <p>{paciente.issues}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Notas añadidas: </h6>
                        <p>{paciente.notas}</p>
                    </div>
                </Card>
            </div>
        )
    }


    return (
        <div className="App">
            <h1>Expediente</h1>
            <div class="container mt-3">
                <div className="d-flex flex-row mb-2 justify-content-center flex-fill">
                    <div className="p-2  align-self-center">
                        {credenciales.map(renderPacienteCard)}
                    </div>
                    <div className="align-self-center flex-grow-1">
                        {pacientes.map(renderPaciente)}
                    </div>
                </div>
                <br />
                <div className="text-center  justify-content-center">
                    <Form.Group size="md" controlId="exampleForm.ControlTextarea1">
                        <h5>Añadir notas sobre el paciente: </h5>
                        <br />
                        <Form.Control as="textarea" rows={7} />
                    </Form.Group>
                    <Col>
                        <Button type="submit" className="mb-2">
                            Agregar notas
                        </Button>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default ExpedienteIndividual
