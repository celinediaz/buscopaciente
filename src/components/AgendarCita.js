import React, { useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap'
import moment from 'moment';
import Calendar from './Calendar';
import { useAuth } from "../contexts/AuthContext"
import {Link} from 'react-router-dom';

const AgendarCita = () => {
    const tipoDoctor = ['Medicina general', 'Psicología', 'Nutrición', 'Enfermería', 'Químico', 'Dentista'];
    const horario = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const [selectedDay, selectDay] = useState(moment());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (day) => setShow(true);
    const {findPract, currentUserdb, agendar} = useAuth();
   const [practicantes, setPracticantes] = useState([]);
   const [hora, setHora] = useState([]);
   const [practicante, setPracticante] = useState([]);
   const [upd, setUp] = useState([]);
   const [loading, setLoading] = useState(false);
    function dayStyle(day) {
            if (!day.isBefore(new Date(), "day")) {
                return "available day-container";
            }
        return "day-container"
    }


    function onSelect(day) {
        if(!day.isBefore(new Date(), "day")){
            selectDay(day);
            handleShow();
        }
    }
    
    function selectJob(job){
        setPracticantes(findPract(job.target.value));
        setUp([]);
    }
    function selectPract(prac){
        setPracticante({name: prac.target.value, uid: prac.target.options[prac.target.selectedIndex].getAttribute('data-uid')});
        setUp([]);
    }
    function selectHorario(horario){
        setHora(horario.target.value);
        setUp([]);
    }

   async function handleSubmit(e){
        e.preventDefault()
        try{
            setLoading(true)
            const cita = moment(selectedDay.format('YYYY MM DD') + " " + hora, "YYYY MM DD H:mm").format('YYYY MM DD H:mm');
           await agendar(practicante.uid, cita)
        } catch {
            console.log("error")
        }
        setLoading(false);
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
                    {practicantes.map((practicante, index) => (<option key={index} data-uid={practicante.uid} as="button">{practicante.name}</option>))}
                    </Form.Control>
                </Form.Group>

            </div>
            <div className="calendar">
                <Calendar onSelect={onSelect} dayStyle={dayStyle} />
                <Link to="/listacitas"> <Button className="my-2" block> Ver lista de citas  </Button> </Link> 
                <Link to="/vercitas"> <Button className="my-2" block> Ver calendario </Button> </Link> 
                <Modal show={show} onHide={handleClose} size="sm" animation={false}>
                <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Horario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2>Fecha: </h2><p>{selectedDay.format('MMMM Do YYYY')}</p>
                            <h2>Doctor: </h2><p>{practicante.name}</p>           
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label as = "h2">Seleccionar horario</Form.Label>
                                <Form.Control as="select" onChange={e => selectHorario(e)}>
                                {horario.map((tipo, index) => (<option key={index} as="button">{tipo}</option>))}
                                </Form.Control>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit" disabled={loading}>
                                Agendar
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
            </div>
        </div>
    )
}

export default AgendarCita
