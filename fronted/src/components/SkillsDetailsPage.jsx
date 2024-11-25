import React from "react";

function SkillsDetailsPage({ navigateTo, skill }) {
  return (
    <div>
      <h1>Skill Details</h1>
      {skill ? (
        <div>
          <h2>{skill.title}</h2>
          <p>Category: {skill.category}</p>
        </div>
      ) : (
        <p>No skill selected</p>
      )}
      <button onClick={() => navigateTo("home")}>Back to Home</button>
    </div>
  );
}

export default SkillDetailsPage;
