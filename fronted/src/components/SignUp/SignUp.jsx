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
          </Form.Group>
          <Button variant="primary" type="submit" className="signup-button">
            Signup
          </Button>
        </Form>
        <div className="login-link">
          Already a Member? <Link to="/login">Login</Link>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Signup;
