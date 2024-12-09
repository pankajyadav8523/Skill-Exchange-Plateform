import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import "./SignUp.css";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Change default to an empty string or any desired default value
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <Container className="signup-container" style={{ height: "300px" }}>
        <h2 className="signup-title">Signup</h2>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update the name state
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
