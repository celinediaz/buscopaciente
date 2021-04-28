import React from 'react'
import { Container, Row, Col, Image, Button, Jumbotron } from "react-bootstrap";
import image from "./undraw_medicine.svg";
import { Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="align-self-center">
                        <h2>BuscoPaciente</h2>
                        <h6 muted>Regístrate y descubre los beneficios que tenemos para ti</h6>
                        <Button variant="primary" type="submit" as={Link} to="/signup">Registrarme ahora</Button>
                    </Col>
                    <Col className="align-self-center">
                        <Image className="align-self-center" src={image} width="100%" />
                    </Col>
                </Row>
            </Container>

           <div className="quienes_somos">
            <Jumbotron>
                <h1>¿Quiénes somos?</h1>
                <div className="texto_quienes_somos">
                <p>
                    Te proporcionamos las mejores opciones para ti. Ajustalo a tus
                    necesidades de salud y asegúrate de que te sometas a un tratamiento 
                    con nuestros expertos calificados, puedes consultar con
                    nosotros qué tipo de servicio es adecuado para tu salud.
                </p>
                </div>
                <p>
                    <Button variant="primary">Conoce más</Button>
                </p>
            </Jumbotron>
            </div>


            <div className="equipo">
               
                <h1 className="titulo_equipo">¿Quiénes forman parte de nuetro equipo?</h1>
                <p>
                    Expertos en el área de la salud seleccionados para brindarte la mejor calidad.
                </p>
                
            </div>

            <Container className="imagenes_experto">
                 <Row>
                    <Col xs={6} md={4}>
                     <Image src="https://www.jobisjob.com.mx/blog/wp-content/uploads/2015/01/foto-ideal-perfil-linkedin-300x200.jpg" roundedCircle width="80%" />
                     </Col>
                    <Col xs={6} md={4}>
                     <Image src="https://i.pinimg.com/736x/5f/49/e1/5f49e11efad480bf5be95e2cd30332f4.jpg" roundedCircle width="50%"/>
                    </Col>
                    <Col xs={6} md={4}>
                     <Image src="https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg" roundedCircle width="80%" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
