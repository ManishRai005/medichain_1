import React from "react";

const DoctorLogin = () => {
  return (
    <div className="container">
      <h2 className="title">Doctor Login</h2>
      <input type="text" placeholder="Enter ID" className="input-field" />
      <input type="password" placeholder="Enter Password" className="input-field" />
      <button>Login</button>
    </div>
  );
};

export default DoctorLogin;
