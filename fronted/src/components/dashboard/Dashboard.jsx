import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import profilesData from "./skills.json";

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  return (
    <div className="dashboard">
      {profiles.map((profile) => (
        <div className="card" key={profile.id}>
          <img
            src={profile.profilePic}
            alt={`${profile.name}'s profile`}
            className="profile-pic"
          />
          <h3 className="name">{profile.name}</h3>
          <div className="rating">
            <span className="stars">
              {"★".repeat(Math.round(profile.rating))}
            </span>
            <span className="rating-value">({profile.rating})</span>
          </div>
          <ul className="skills">
            {profile.skills.map((skill, index) => (
              <li key={index} className="skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
