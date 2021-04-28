import React from 'react';
import { Card, Form, Button, Col} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"

const ExpedienteIndividual = () => {
    const {currentUserdb} = useAuth()

  

    const renderPaciente = () => {
        return (
            <div>
                <Card className="card container d-flex flex-wrap ">
                    <div className="p-2 border">
                        <h6>Fecha de nacimiento: </h6>
                        <p>{currentUserdb.birth}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Edad: </h6>
                        <p>{currentUserdb.age}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Estado civil: </h6>
                        <p>{currentUserdb.maritalStatus}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Correo electrónico: </h6>
                        <p>{currentUserdb.email}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Teléfono: </h6>
                        <p>{currentUserdb.tel}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Domicilio: </h6>
                        <p>{currentUserdb.address}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Religión: </h6>
                        <p>{currentUserdb.religion}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Antecedentes médicos: </h6>
                        <p>{currentUserdb.illnesses}</p>
                    </div>
                    <div className="p-2 border">
                        <h6>Notas añadidas: </h6>
                        <p>{currentUserdb.notes}</p>
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
                    <Form.Group size="md" controlId="exampleForm.ControlTextarea1">
                        <h5>Añadir notas sobre el paciente: </h5>
                        <br />
                        <Form.Control as="textarea" rows={12} />
                    </Form.Group>
                    <Col>
                        <Button type="submit" className="mb-2">
                            Agregar notas
                        </Button>
                    </Col>
                    </div>
                    <div className="align-self-center flex-grow-1">
                        {renderPaciente()}
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default ExpedienteIndividual
