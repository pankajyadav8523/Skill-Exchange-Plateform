import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useAuth } from "../../../AuthContext";
const ProfilePage = () => {
  const { user } = useAuth();
  const userData = {
    name: user.displayName,
    email: user.email,
    skills: [
      { name: "JavaScript", ratings: 4 },
      { name: "React", ratings: 5 },
    ],
    connections: [
      { userId: 1, skill: "JavaScript", status: "Accepted" },
      { userId: 2, skill: "React", status: "Pending" },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{userData.name}'s Profile</h1>
        <p>Email: {userData.email}</p>
      </div>

      <div className="profile-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {userData.skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <div className="rating">Rating: {skill.ratings}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h2>Connections</h2>
        <div className="connections-list">
          {userData.connections.map((connection, index) => (
            <div className="connection-card" key={index}>
              <p>Skill: {connection.skill}</p>
              <div className={`status ${connection.status.toLowerCase()}`}>
                {connection.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
