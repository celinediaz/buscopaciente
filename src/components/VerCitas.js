import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from './Calendar';
import { useAuth } from "../contexts/AuthContext"
import {Link} from 'react-router-dom';

const VerCitas = () => {

    const { currentUserdb,  queriedAppointdb, queryAppointInfo} = useAuth();
    let scheduledDates = queriedAppointdb && queriedAppointdb.map(citainfo => moment(citainfo.fecha, "YYYY MM DD H:mm"));


    function dayStyle(day) {
        for (let i = 0; scheduledDates && i < scheduledDates.length; i++) {
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
        if ((dayStyle(day) === "pending day-container" || dayStyle(day) === "passed day-container")) {
        }
    }
    useEffect(() => {
        queryAppointInfo(currentUserdb);
      }, []);

    return (
        <div>
            <h1>Ver citas</h1>
            <p className="desc">Selecciona los días marcados en azul para ver el horario de la cita</p>
            <div className="container">
                <div className="calendar">
                    <Calendar onSelect={onSelect} dayStyle={dayStyle}/>       
                </div>
                <div className="schedule-info">
                    <div className="day-info"><div className="pending day-container"></div>Próximas citas</div>
                    <div className="day-info"><div className="passed day-container"></div>Citas pasadas</div>
                </div>
                <div className="calendar">
                {currentUserdb.role === "user" && <Link to="/agendarcitas"> <Button className="my-2" block> Añadir cita </Button> </Link>}
                {currentUserdb.role === "user" ? <Link to="/listacitas"> <Button className="my-2" block> Ver lista de citas  </Button> </Link> :  <Link to="/expedientes"> <Button className="my-2" block> Ver lista de citas  </Button> </Link> }
                </div>
            </div>
        </div>
    )
}

export default VerCitas
