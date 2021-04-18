import React, { useState, useEffect } from 'react';
import {Form, Modal, Button} from 'react-bootstrap'
import moment from 'moment';
import Calendar from './Calendar';
import { useAuth } from "../contexts/AuthContext"

const AgendarCita = () => {
    const tipoDoctor = ['Medicina general', 'Psicología', 'Nutrición', 'Enfermería', 'Químico', 'Dentista'];
    const availableDates = [moment("2021 03 30", "YYYY MM DD"), moment("2021 04 02", "YYYY MM DD")];
    const [selectedDay, selectDay] = useState(availableDates[0]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (day) => setShow(true);
    const {findPract} = useAuth();
   const [practicantes, setPracticantes] = useState([]);
   const [upd, setUp] = useState([]);
    function isAvailable(day) {
        for (let i = 0; i < availableDates.length; i++) {
            if (availableDates[i].isSame(day, "day")) return true;
        }
        return false;
    }

    function dayStyle(day) {
        if (isAvailable(day)) return "available day-container";
        return "day-container"
    }

    function onSelect(day) {
        if (isAvailable(day)) {
            selectDay(day);
            console.log(day);
            handleShow();
        }
    }
    
    function selectJob(job){
        setPracticantes(findPract(job.target.value));
        setUp([]);
    }
    function selectPract(prac){
        
    }

    return (
        <div>
            <h1>Agendar citas</h1>
            <p className="desc">Selecciona entre los días marcados en azul para agendar tu cita</p>
            <div className="container">
                <div className="dropdowns">

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Motivo de consulta</Form.Label>
                    <Form.Control as="select"  onChange={e => selectJob(e)}>
                    <option>Motivo de consulta</option>
                    {tipoDoctor.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Seleccionar doctor</Form.Label>
                    <Form.Control as="select" onChange={e => selectPract(e)}>
                    <option>Seleccionar doctor</option>
                    {practicantes.map((practicante, index) => (<option key={index} as="button">{practicante.name}</option>))}
                    </Form.Control>
                </Form.Group>

            </div>
            <div className="calendar">
                <Calendar onSelect={onSelect} dayStyle={dayStyle} />
                <Modal show={show} onHide={handleClose} size="sm">
                        <Modal.Header closeButton>
                            <Modal.Title>Horario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h1>Fecha: </h1><p>{selectedDay.format('MMMM Do YYYY')}</p>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Seleccionar horario</Form.Label>
                                <Form.Control as="select">
                                {tipoDoctor.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                                </Form.Control>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Agendar
                            </Button>
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

export default AgendarCita
