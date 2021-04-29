import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import image from "./undraw_medicine.svg";
import { Canvas, useFrame } from "react-three-fiber";
import Scene from './Scene';
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const MenuPaciente = () => {

  return (
    <div className="App">

      <h1>Bienvenido a BuscoPaciente</h1>
      <h2>¿Qué deseas hacer?</h2>
      <Container>
        <Row>
          <Col className="align-self-center">
            <Link to="/agendarcitas">
              <Button className="my-2" size="lg" block>
                Agendar cita
              </Button>
            </Link>
            <Link to="/vercitas">
              <Button className="my-2" size="lg" block>
                Ver mis citas
              </Button>
            </Link>
            <Link to="/editardatos">
              <Button className="my-2" size="lg" block>
                Editar datos
              </Button>
            </Link>
            <Link to="/listacitas">
              <Button className="my-2" size="lg" block>
                Lista de citas
              </Button>
            </Link>
          </Col>

          <Col>
            <Canvas>
              <ambientLight intensity={0.7} />
              <spotLight position={[5, 10, 10]} angle={0.15} penumbra={0.8} />
              <pointLight position={[5, -5, -10]} />
              <Sphere visible position={[0, 0, 0]} args={[2, 16, 200]}>
                <MeshDistortMaterial
                  color="#037AFB"
                  attach="material"
                  distort={0.4} 
                  speed={1} 
                  roughness={0.1}
                />
              </Sphere>
            </Canvas>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default MenuPaciente
