<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import navigation hook
import { useAuth } from "../../../AuthContext"; // Import the AuthContext
import "./SignUp.css";

const Signup = () => {
  const { signup } = useAuth(); // Get the signup function from the context
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  // Signup handler function
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password); // Call signup function from context
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <Container className="signup-container" style={{ height: "300px" }}>
        <h2 className="signup-title">Signup</h2>
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Display error message if any */}
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
            />
=======
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
>>>>>>> ada5b04dfa998939dfd5095d1886d8f36ccdec6a
          </Form.Group>
          <Button variant="primary" type="submit" className="signup-button">
            Signup
          </Button>
        </Form>
        <div className="login-link">
<<<<<<< HEAD
          Already a Member? <Link to="/login">Login</Link>{" "}
=======
          Already a Member? <Link to="/login">Login</Link>
>>>>>>> ada5b04dfa998939dfd5095d1886d8f36ccdec6a
        </div>
      </Container>
    </div>
  );
};

export default Signup;
