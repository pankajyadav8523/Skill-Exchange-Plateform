import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SignUp.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      <Container className="signup-container">
        <h2 className="signup-title">Signup</h2>
        <Form>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="signup-button">
            Signup
          </Button>
        </Form>
        <div className="login-link">
          Already a Member? <Link to="/login">Login</Link>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
