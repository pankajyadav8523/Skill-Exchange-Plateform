import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/SignUp"; // Ensure this matches the file name
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
