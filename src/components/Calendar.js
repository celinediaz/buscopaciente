import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Calendar = ({onSelect, dayStyle}) => {

    const [value, setValue] = useState(moment());
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        const firstDay = value.clone().startOf("month").startOf("week");
        const lastDay = value.clone().endOf("month").endOf("week");
        const day = firstDay.clone().subtract(1, "day");
        const temp = []
        while (day.isBefore(lastDay, "day")) {
            temp.push(Array(7).fill(0).map(() => day.add(1, "day").clone()))
        }
        setCalendar(temp)
    }, [value])

    const weekDays = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

    function pastMonth() {
        return value.clone().subtract(1, "month")
    }
    function nextMonth() {
        return value.clone().add(1, "month")
    }

    return (
        <div>
            <div className="month">
                <FontAwesomeIcon icon={faArrowLeft} color="#007bff" onClick={() => setValue(pastMonth())} />
                <h3>{value.format('MMMM')}</h3>
                <FontAwesomeIcon icon={faArrowRight} color="#007bff" onClick={() => setValue(nextMonth())} />
            </div>
            <div className="week">
                {weekDays.map((day, index) => <div key={index} className="weekDay"> {day} </div>)}
            </div>
            {calendar.map((week, ind) =>
                <div key={ind} className="week">{
                    week.map((day, index) => <div key={index} className={ dayStyle(day, value)}>
                        <div key={index} className={"day"} onClick={() => onSelect(day)}>
                            {day.format("D")} </div>
                    </div>
                    )}
                </div>)}
        </div>
    )
}

export default Calendar
