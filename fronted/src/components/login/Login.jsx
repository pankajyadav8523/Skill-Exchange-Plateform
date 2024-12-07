import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import navigation hook
import { useAuth } from "../../../AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useAuth(); // Get the login function from the context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleLogin}>
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
