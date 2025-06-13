import { useEffect, useState } from "react";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/patient") // Fetch patient data from backend
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2>Patient Dashboard</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name} - {patient.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
