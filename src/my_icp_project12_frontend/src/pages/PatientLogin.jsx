import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateWithICP } from "../utils/icpAuth";
import "./Login.scss";

const PatientLogin = () => {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState("");

  const handleLogin = async () => {
    const userIdentity = await authenticateWithICP();
    if (userIdentity) {
      setIdentity(userIdentity);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Patient Login</h2>
      <button onClick={handleLogin}>Login with ICP</button>
    </div>
  );
};

export default PatientLogin;
