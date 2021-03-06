import React, { useState, useRef } from 'react';
import { Form, FormControl, Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../contexts/AuthContext"
import moment from 'moment';

const ListaCitas = () => {
    const {doctores} = useAuth();
    const [doctors, setDoctors] = useState(doctores);
    const searchRef =useRef();

    const renderDoctor = (doctor, index) => {
        const fecha = moment(doctor.fecha, "YYYY MM DD H:mm").format('LLL');
        return (
            <tr key={index}>
                <td className="text-center align-middle">{doctor.name}</td>
                <td className="text-center align-middle">{doctor.email}</td>
                <td className="text-center align-middle">{doctor.job}</td>
                <td className="text-center align-middle">{fecha}</td>
                <td className="text-center align-middle">{doctor.estado}</td>
            </tr>
        )
    }

    function searchDoctor(e){
        e.preventDefault();
        const filteredDoctors = doctores.filter(doctor => doctor.name.toLowerCase().startsWith(searchRef.current.value.toLowerCase()));
        setDoctors(filteredDoctors)
    }
    return (
        <div>
        <h1>Citas</h1>
        <div className="buscador">
            <Form inline className="justify-content-center" onSubmit={searchDoctor}>
                <FontAwesomeIcon className="icono" icon={faSearch} color="#007bff" />
                <FormControl ref={searchRef} className="buscadori mr-sm-8 col-sm-4" type="text" placeholder="Buscar doctor"width="100" />
                <Button type="submit" className="mx-1"> Buscar </Button>
            </Form>
            
        </div>

        <div className="container mb-5">
            <div className="tablita  mb-5">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center">Nombre</th>
                            <th className="text-center">Correo electr??nico</th>
                            <th className="text-center">Motivo</th>
                            <th className="text-center">Fecha de cita</th>
                            <th className="text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(renderDoctor)}
                    </tbody>
                </Table>
            
            </div>
        </div>

    </div>
    )
}

export default ListaCitas
