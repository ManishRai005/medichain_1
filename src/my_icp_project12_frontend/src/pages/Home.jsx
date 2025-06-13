import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="fade-in">Welcome to MediChain</h1>
      <p className="description fade-in">Your Decentralized Healthcare System</p>
      <div className="button-group">
        <button className="button" onClick={() => navigate("/patient-login")}>
          Patient Login
        </button>
        <button className="button" onClick={() => navigate("/doctor-login")}>
          Doctor Login
        </button>
      </div>
    </div>
  );
};

export default Home;
