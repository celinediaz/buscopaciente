import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from './Calendar';

const VerCitas = () => {
    //example dates
    const passedDates = [moment("2021 03 17", "YYYY MM DD"), moment("2021 03 22", "YYYY MM DD")];
    const scheduledDates = [moment("2021 04 03", "YYYY MM DD"), moment("2021 04 09", "YYYY MM DD")];

    //Only useful for this one
    const [selectedDay, selectDay] = useState(scheduledDates[0]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (day) => setShow(true);

    function isPending(day) {
        for (let i = 0; i < scheduledDates.length; i++) {
            if (scheduledDates[i].isSame(day, "day")) {
                return true;
            }
        }
        return false;
    }
    function hasPassed(day) {
        for (let i = 0; i < passedDates.length; i++) {
            if (passedDates[i].isSame(day, "day")) return true;
        }
        return false;
    }
    function dayStyle(day) {
        if (isPending(day)) return "pending day-container";
        if (hasPassed(day)) return "passed day-container";
        return "day-container"
    }

    function onSelect(day) {
        if (isPending(day)) {
            selectDay(day);
            console.log(selectedDay);
            handleShow();
        }
    }

    return (
        <div>
            <h1>Ver citas</h1>
            <p className="desc">Selecciona los días marcados en azul para ver el horario de la cita</p>
            <div className="container">
                <div className="calendar">
                    <Calendar onSelect={onSelect} dayStyle={dayStyle} />
                    <Modal show={show} onHide={handleClose} size="sm">
                        <Modal.Header closeButton>
                            <Modal.Title>Horario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h1>Fecha: </h1><p>{selectedDay.format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p> Su cita es {selectedDay.startOf('day').fromNow()}</p>
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
                    <Button variant="primary">Regresar al menú</Button>
                    <Button variant="primary">Añadir cita</Button>
                </div>
            </div>
        </div>
    )
}

export default VerCitas
