import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MediChain</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patient-login">Patient Data</Link></li>
        <li><Link to="/doctor-login">Doctor Data</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
