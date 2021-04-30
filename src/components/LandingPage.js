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
                    Expertos en el área de la salud como médicos, odontologos, psicologos seleccionados para brindarte la mejor calidad de servicio para ti y tu familia.
                </p>
                
            </div>

            <Container className="imagenes_experto">
                 <Row>
                    <Col xs={6} md={3}>
                     <Image src="https://1.bp.blogspot.com/-ScppyJrc2tg/YIx1z2b7G_I/AAAAAAAAAZI/t73VuZcBrTwPNwfyMtPeGJNf4yO2L1V-QCLcBGAsYHQ/s320/Wavy_Lst-05_Single-04.jpg" roundedCircle width="80%" />
                     </Col>
                    <Col xs={6} md={3}>
                     <Image src="https://1.bp.blogspot.com/-gq0a5ZqS--s/YIx1ylBatQI/AAAAAAAAAZE/VAV1caSa6s0NnffzFf2vLw0SiCrgkdzzACLcBGAsYHQ/s320/odonto.jpg" roundedCircle width="80%"/>
                    </Col>
                    <Col xs={6} md={3}>
                     <Image src="https://1.bp.blogspot.com/-XAXnB92q1xw/YIx1uFvI6dI/AAAAAAAAAZA/JzOxMNxAXDsXr1MOnU_mkJpKFWuJ8TfDQCLcBGAsYHQ/s320/4951627.jpg" roundedCircle width="80%" />
                    </Col>
                    <Col xs={6} md={3}>
                     <Image src="https://1.bp.blogspot.com/-MXRxAMurEag/YIx1uI7Uk5I/AAAAAAAAAY8/TndX3cW6zuQAv-ZNICkxXtyDt4JxJI6fgCLcBGAsYHQ/s320/3926904.jpg" roundedCircle width="80%" />
                    </Col>
                </Row>
            </Container>

            

        </div>


    )
}

export default LandingPage
