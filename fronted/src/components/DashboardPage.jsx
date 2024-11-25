import React from "react";

function DashboardPage({ navigateTo }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Manage your listed skills here.</p>
      <button onClick={() => navigateTo("home")}>Back to Home</button>
    </div>
  );
}

export default DashboardPage;
