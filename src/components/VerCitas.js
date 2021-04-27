import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from './Calendar';
import { useAuth } from "../contexts/AuthContext"
import {Link} from 'react-router-dom';

const VerCitas = () => {

    const { currentUserdb, queriedUserdb, queryUserInfo, queriedAppointdb, queryAppointInfo, changeState } = useAuth();
    let scheduledDates = queriedAppointdb && queriedAppointdb.map(citainfo => moment(citainfo.fecha, "YYYY MM DD H:mm"));
    if (!scheduledDates){scheduledDates = [moment(new Date(), "YYYY MM DD H:mm")]}
    const [selectedDay, selectDay] = useState(scheduledDates[0]);
    const [selectedDayinfo, selectDayinfo] = useState(currentUserdb.citas[0]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (day) => setShow(true);
    const [upd, setUp] = useState([]);
    function dayStyle(day) {
        for (let i = 0; i < scheduledDates.length; i++) {
            if (scheduledDates[i].isSame(day, "day") && scheduledDates[i].isBefore(new Date(), "day")) {
                return "passed day-container";
            }
            else if (scheduledDates[i].isSame(day, "day")) {
                return "pending day-container";
            }
        }
        return "day-container"
    }


    function onSelect(day) {
        if (dayStyle(day) === "pending day-container" || dayStyle(day) === "passed day-container") {
            let usuario;
            for (let i = 0; i < scheduledDates.length; i++) {
                if (scheduledDates[i].isSame(day, "day")){
                   selectDayinfo(queriedAppointdb[i]);
                   selectDay(scheduledDates[i].format('DD MMM YYYY, h:mm a'))
                   currentUserdb.role === "prac"  ? queryUserInfo(queriedAppointdb[i].pacienteID) : queryUserInfo(queriedAppointdb[i].doctorID);
                }
            }
            handleShow();
        }
    }

    return (
        <div>
            <h1>Ver citas</h1>
            <p className="desc">Selecciona los días marcados en azul para ver el horario de la cita</p>
            <div className="container">
                <div className="calendar">
                    <Calendar onSelect={onSelect} dayStyle={dayStyle}/>
                    <Modal show={show} onHide={handleClose} size="sm" animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Horario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2>Fecha: </h2><p>{ selectedDay }</p>
                            <h2>Estado de cita: </h2>
                            { currentUserdb.role === "user" && <p>El estado de la cita es {selectedDayinfo && selectedDayinfo.estado}</p> }
                            {currentUserdb.role === "prac" && <Button className="mx-2" onClick={() => changeState(queriedUserdb.uid, selectedDayinfo.fecha, "confirmado")}  > Confirmar </Button> }
                            {currentUserdb.role === "prac" && <Button className="mx-2" variant="danger" onClick={() => changeState(queriedUserdb.uid, selectedDayinfo.fecha, "cancelado")}  >Cancelar</Button>}
                            {currentUserdb.role === "user" ?<h2>Doctor: </h2> : <h2>Paciente: </h2> }
                            {currentUserdb.role === "user" ? <p>Su doctor es {queriedUserdb && queriedUserdb.name}</p>: <p>Su paciente es {queriedUserdb && queriedUserdb.name}</p>}
                            {currentUserdb.role === "user" && <p>El motivo de su cita es {queriedUserdb && queriedUserdb.job}</p>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="schedule-info">
                    <div className="day-info"><div className="pending day-container"></div>Próximas citas</div>
                    <div className="day-info"><div className="passed day-container"></div>Citas pasadas</div>
                </div>
                <div className="calendar">
                {currentUserdb.role === "user" && <Link to="/agendarcitas"> <Button className="my-2" block> Añadir cita </Button> </Link>}
                </div>
            </div>
        </div>
    )
}

export default VerCitas
