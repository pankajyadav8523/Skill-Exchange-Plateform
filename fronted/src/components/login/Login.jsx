import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Container className="login-container">
        <h2 className="login-title">Login</h2>
        <Form>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <div className="text-end mb-3">
            <a href="#" className="forgot-password">
              Forget Password?
            </a>
          </div>
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
        <div className="signup-link">
          Not a Member? <Link to="/signup">Signup</Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
