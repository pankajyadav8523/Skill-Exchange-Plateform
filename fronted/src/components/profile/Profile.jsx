import React from "react";
import { Container, Card } from "react-bootstrap";

const Profile = ({ user }) => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">User Profile</h1>
      <Card>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
