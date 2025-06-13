import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const doctorData = [
  { name: "Jan", patients: 10 },
  { name: "Feb", patients: 15 },
  { name: "Mar", patients: 12 },
  { name: "Apr", patients: 18 },
  { name: "May", patients: 20 },
];

const DoctorDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Doctor Dashboard</h2>
      
      <Card className="p-4 mb-6">
        <h3 className="text-lg font-medium">Patient Visits Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={doctorData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#007BFF" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-medium">Upcoming Appointments</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>John Doe - 10:00 AM, 20 April</li>
          <li>Jane Smith - 2:00 PM, 22 April</li>
          <li>Michael Johnson - 5:30 PM, 25 April</li>
        </ul>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
