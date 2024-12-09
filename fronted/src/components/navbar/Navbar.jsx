import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Navbar.css";
import { useAuth } from "../../../AuthContext"; // Import the useAuth hook

const CustomNavbar = () => {
  const { user, loading, logout } = useAuth(); // Destructure user, loading, and logout
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/"); // Navigate to home page ("/") after successful logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand>Loading...</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Skill Bridge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* If user is logged in, display user's name and logout button */}
            {user ? (
              <>
                <Nav.Link>Welcome, {user.displayName || user.email}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                {/* If no user, show Login and Signup links */}
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
