import React from 'react'
import { Container, Row, Col, Image, Button, Jumbotron } from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link} from "react-router-dom";

const Quienessomos = () => {
    return (
        <div>
            
           <div className="Conoce_mas">
            <Jumbotron>
                <h1>Conoce más</h1>
                
                <h5>
                Somos BuscoPaciente, una plataforma que facilitará la conexión entre practicante y paciente, 
                promoviendo el servicio a la comunidad y un alivio a los necesitados. Con nuestra plataforma, 
                el practicante reduce el esfuerzo de encontrar un paciente con las características necesarias, 
                y el paciente podrá encontrar más rápido a un practicante que se asemeje a sus necesidades. 
                </h5>
                
                <h5>
                Busco Paciente es la primera plataforma en México que realiza este proceso, es por eso, 
                que nos sentimos con el compromiso de ofrecer un servicio de calidad para nuestros asociados. 
                </h5>
                
            </Jumbotron>
            </div>

            

            

        </div>


    )
}

export default Quienessomos
