import React from "react";

function HomePage({ navigateTo, skills }) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to Skill Bridge!</p>
      <div>
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigateTo("skillDetails", skill)}
          >
            <h3>{skill.title}</h3>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigateTo("dashboard")}>Go to Dashboard</button>
    </div>
  );
}

export default HomePage;
