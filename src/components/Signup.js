import React, {useRef, useState} from 'react'
import { Form, Button, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
const Signup = () => {
    const emailRef =useRef();
    const passRef =useRef();
    const passConfRef =useRef();
    const {signup} = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        if(passRef.current.value !== passConfRef.current.value){
            return setError('Las contraseñas son diferentes')
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value) 
            history.push("/")  //use a ternary operator to choose which route to go (doctor/user)
        } catch {
            console.log("error")
            setError("No se ha podido crear la cuenta")
        }
        setLoading(false);
    }
    return (
        <div>
            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passRef} placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passConfRef} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={loading}>
                Crear cuenta
              </Button>
              <Form.Text className="text-muted">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login">Inicia sesión</Link>
              </Form.Text>
            </Form>
        </div>
    )
}

export default Signup
