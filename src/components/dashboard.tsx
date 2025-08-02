// src/components/Dashboard.tsx
import React, { useEffect, useState } from "react";

interface Metrics {
  users: number;
  transactions: number;
  messages: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    users: 128,
    transactions: 376,
    messages: 52,
  });

  // Optional: simulate realtime updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        users: prev.users + Math.floor(Math.random() * 3),
        transactions: prev.transactions + Math.floor(Math.random() * 8),
        messages: prev.messages + Math.floor(Math.random() * 2),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 flex flex-col items-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide">
        🔮 Real-Time Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card title="Users" count={metrics.users} icon="👤" />
        <Card title="Transactions" count={metrics.transactions} icon="💸" />
        <Card title="Messages" count={metrics.messages} icon="✉️" />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  count: number;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, count, icon }) => (
  <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg p-6 transition-all duration-300 hover:scale-105">
    <div className="text-xl font-semibold mb-2 flex justify-between items-center">
      <span>{title}</span>
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="text-4xl font-bold tracking-tight">{count}</div>
  </div>
);

export default Dashboard;
