import React from 'react'
import { Container, Row, Col, Image, Button, } from "react-bootstrap";
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
        </div>
    )
}

export default LandingPage
