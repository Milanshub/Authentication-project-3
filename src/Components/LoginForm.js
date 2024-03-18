import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button  from "react-bootstrap/Button";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

         // Clear fields after submission
        setUsername('');
        setPassword('');
    }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="Login">
        Login
      </Button>
    </Form>
    )
}

export default LoginForm; 