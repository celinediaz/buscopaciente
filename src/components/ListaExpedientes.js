import React, { useState, useRef } from 'react';
import { Form, FormControl, Table, Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../contexts/AuthContext"
import moment from 'moment';

const ListaExpedientes = () => {
    const {pacientes, changeState} = useAuth();
    const [patients, setPatients] = useState(pacientes);
    const [patient, setPatient] = useState();
    const searchRef =useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (day) => setShow(true);
    const renderPaciente = (paciente, index) => {
        const fecha = moment(paciente.fecha, "YYYY MM DD H:mm").format('LLL');
        return (
            <tr key={index}>
                <td className="text-center align-middle">{paciente.name}</td>
                <td className="text-center align-middle">{paciente.email}</td>
                <td className="text-center align-middle">{fecha}</td>
                <td className="text-center align-middle"><Button onClick={() => onSelect(paciente)}>Ver expediente</Button></td>
                <td className="text-center align-middle"><Button variant="success" onClick={() => changeState(paciente.uid, paciente.fecha, "confirmado")} >Confirmar</Button></td>
                <td className="text-center align-middle"><Button variant="danger"  onClick={() => changeState(paciente.uid, paciente.fecha, "cancelado")}>Cancelar</Button></td>
            </tr>
        )
    }

    function onSelect(paciente) {
        setPatient(paciente)
        handleShow();
    }

    function searchPatient(e){
        e.preventDefault();
        const filteredPatients = pacientes.filter(patient => patient.name.toLowerCase().startsWith(searchRef.current.value.toLowerCase()));
        setPatients(filteredPatients)
    }


    return (
        <div>
            <h1>Expedientes</h1>
            <div className="buscador">
                <Form inline className="justify-content-center" onSubmit={searchPatient}>
                    <FontAwesomeIcon className="icono" icon={faSearch} color="#007bff" />
                    <FormControl ref={searchRef} className="buscadori mr-sm-8 col-sm-4" type="text" placeholder="Buscar paciente" width="100" />
                    <Button type="submit" className="mx-1"> Buscar </Button>
                </Form>
                
            </div>

            <div className="container mb-5">
                <div className="tablita mb-4">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Correo electrónico</th>
                                <th className="text-center">Fecha de cita</th>
                                <th className="text-center">Expediente</th>
                                <th className="text-center">Confirmar</th>
                                <th className="text-center">Cancelar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(renderPaciente)}
                        </tbody>
                    </Table>
                    <Modal show={show} onHide={handleClose} size="sm" animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Expediente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Nombre</h4><p>{patient && patient.name + " " + patient.lastname}</p> 
                            {patient && patient.address && <h4>Dirección</h4>} <p>{patient && patient.address}</p>  
                            <h4>Fecha de nacimiento</h4><p>{patient && patient.birth}</p>    
                            <h4>Estado civil</h4><p>{patient && patient.maritalStatus}</p>  
                            {patient && patient.religion && <h4>Religión</h4>}<p>{patient && patient.religion}</p> 
                            <h4>Correo</h4><p>{patient && patient.email}</p>  
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                </Modal>
                
                </div>
            </div>

        </div>
    )
}

export default ListaExpedientes
