import React, { useState } from 'react';
import { Form, FormControl, Table, Image, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ListaExpedientes = () => {
    const pacientes = [
        { foto: "https://picsum.photos/171/180", nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "http://example.com" },
        { foto: "https://picsum.photos/171/180", nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },
        { foto: "https://picsum.photos/171/180", nombre: "Adriana García", correo: "nana@gmial.com", horario: "date", ver: "" },

    ]

    const renderPaciente = (paciente, index) => {
        return (
            <tr key={index}>
                <td className="text-center align-middle"><Image className="mx-auto d-block" width="60" height="60" src={paciente.foto} roundedCircle /></td>
                <td className="text-center align-middle">{paciente.nombre}</td>
                <td className="text-center align-middle">{paciente.correo}</td>
                <td className="text-center align-middle">{paciente.horario}</td>
                <td className="text-center align-middle"><a href={paciente.ver}>Ver más</a></td>
            </tr>
        )
    }

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(

            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination >{items}</Pagination>
        </div>
    );

    return (
        <div className="App">
            <h1>Expedientes</h1>
            <div className="buscador">
                <Form inline className="justify-content-center">
                    <FontAwesomeIcon className="icono" icon={faSearch} color="#007bff" />
                    <FormControl className="buscadori" type="text" placeholder="Buscar paciente" className=" mr-sm-8 col-sm-4" width="100" />
                </Form>
            </div>

            <div className="container">
                <div className="tablita">
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center"></th>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Correo electrónico</th>
                                <th className="text-center">Próxima cita</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientes.map(renderPaciente)}
                        </tbody>
                    </Table>
                </div>
            </div>

            <div className="pag">
                <Pagination className="justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    {paginationBasic}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}

export default ListaExpedientes
