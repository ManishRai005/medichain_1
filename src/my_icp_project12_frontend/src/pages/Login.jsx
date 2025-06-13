import React, { useState } from "react";
import axios from "axios";

const Login = ({ role }) => {
  const [internetIdentity, setInternetIdentity] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        internetIdentity,
        role,
      });

      alert("Login Successful");
      console.log(response.data);
    } catch (error) {
      alert("Login Failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{role} Login</h2>
      <input
        type="text"
        placeholder="Enter Internet Identity"
        value={internetIdentity}
        onChange={(e) => setInternetIdentity(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
