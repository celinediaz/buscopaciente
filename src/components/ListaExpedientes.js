import React, { useState, useEffect, useRef } from 'react';
import { Form, FormControl, Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../contexts/AuthContext"

const ListaExpedientes = () => {
    const {pacientes} = useAuth();
    const [patients, setPatients] = useState(pacientes);
    const searchRef =useRef();

    
    /*
    const pacientes = [
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "http://example.com" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        
    ]*/

    useEffect(() => {
        
      }, pacientes);

    const renderPaciente = (paciente, index) => {
        return (
            <tr key={index}>
                <td className="text-center align-middle">{paciente.name}</td>
                <td className="text-center align-middle">{paciente.email}</td>
                <td className="text-center align-middle">{paciente.fecha}</td>
                <td className="text-center align-middle"><a href={paciente.ver}>Ver más</a></td>
            </tr>
        )
    }


    function searchPatient(e){
        e.preventDefault();
        console.log(searchRef.current.value);
        const filteredPatients = pacientes.filter(patient => patient.name.toLowerCase().startsWith(searchRef.current.value.toLowerCase()));
        setPatients(filteredPatients)
    }


    return (
        <div className="App">
            <h1>Expedientes</h1>
            <div className="buscador">
                <Form inline className="justify-content-center" onSubmit={searchPatient}>
                    <FontAwesomeIcon className="icono" icon={faSearch} color="#007bff" />
                    <FormControl ref={searchRef} className="buscadori" type="text" placeholder="Buscar paciente" className=" mr-sm-8 col-sm-4" width="100" />
                    <Button type="submit" className="mx-1"> Buscar </Button>
                </Form>
                
            </div>

            <div className="container mb-5">
                <div className="tablita  mb-5">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Correo electrónico</th>
                                <th className="text-center">Fecha de cita</th>
                                <th className="text-center">Expediente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(renderPaciente)}
                        </tbody>
                    </Table>
                
                </div>
            </div>

        </div>
    )
}

export default ListaExpedientes
