import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";


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
    <div className="login-container">
      <div className="login-content">
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p> Doesn't have an account yet?  
            <Link className="btn-register" to="/register">
              Register
            </Link>
          </p>
        
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
      </div>
    </div>
    )
}

export default LoginForm; 