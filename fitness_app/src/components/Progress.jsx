import { useEffect, useState } from "react";
import api from "../api/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Progress() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/WorkoutDetails/").then((res) => {
      const grouped = {};
      res.data.forEach((w) => {
        grouped[w.date] = (grouped[w.date] || 0) + 1;
      });
      const chartData = Object.entries(grouped).map(([date, count]) => ({
        date,
        count,
      }));
      setData(chartData);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
