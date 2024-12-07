import React, { useState } from "react";

const AddSkills = ({ setProfiles, navigate }) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [rating, setRating] = useState(5); // Default rating
  const [profilePic, setProfilePic] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      id: Date.now(), // Unique ID using the current timestamp
      name,
      skills: skills.split(",").map((skill) => skill.trim()), // Split skills by commas
      rating,
      profilePic,
    };

    // Save the new profile to localStorage
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    storedProfiles.push(newProfile);
    localStorage.setItem("profiles", JSON.stringify(storedProfiles));

    // Update the profiles in the Dashboard
    setProfiles(storedProfiles); // Update the state to reflect the new profile

    // Redirect back to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="add-skills-form">
      <h2>Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Skills:</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          required
        />
        <label>Profile Picture URL:</label>
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AddSkills;
