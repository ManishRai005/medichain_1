import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const patientData = [
  { name: "Jan", reports: 2 },
  { name: "Feb", reports: 4 },
  { name: "Mar", reports: 3 },
  { name: "Apr", reports: 5 },
  { name: "May", reports: 6 },
];

const PatientDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Patient Dashboard</h2>
      
      <Card className="p-4 mb-6">
        <h3 className="text-lg font-medium">Health Reports Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={patientData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reports" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-medium">Recent Reports</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Blood Test - 15 March</li>
          <li>MRI Scan - 10 April</li>
          <li>X-Ray - 25 April</li>
        </ul>
      </Card>
    </div>
  );
};

export default PatientDashboard;
