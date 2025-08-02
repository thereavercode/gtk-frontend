//import React from "react";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white font-sans px-6 py-10 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-[-50px] right-[-50px] h-72 w-72 bg-pink-500 rounded-full blur-[150px] opacity-30 z-0"></div>
      <div className="absolute bottom-[-50px] left-[-50px] h-72 w-72 bg-cyan-500 rounded-full blur-[150px] opacity-20 z-0"></div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
          GNG.<span className="text-cyan-400">MEDIATEK</span>
        </h1>
        <button className="bg-cyan-500/80 hover:bg-cyan-400 text-white px-6 py-2 rounded-full shadow-lg backdrop-blur-sm transition">
          Get Started
        </button>
      </header>

      {/* Dashboard Grid */}
      <main className="relative z-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="glassmorphic-card">
          <h2 className="text-lg font-semibold mb-3 text-white/90">GTKPAY</h2>
          <div className="text-4xl font-bold text-cyan-300 mb-1">$1,250</div>
          <p className="text-sm text-white/60">Current Balance</p>
          <div className="mt-4 h-28 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 blur-sm"></div>
        </div>

        <div className="glassmorphic-card">
          <h2 className="text-lg font-semibold mb-4 text-white/90">Transactions</h2>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex justify-between items-center">
              <span>Rent Payment</span>
              <span className="text-green-400 font-medium">+Ksh 7,000</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Electricity Token</span>
              <span className="text-red-400 font-medium">-Ksh 1,500</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Internet</span>
              <span className="text-red-400 font-medium">-Ksh 2,000</span>
            </li>
          </ul>
        </div>

        <div className="glassmorphic-card">
          <h2 className="text-lg font-semibold mb-4 text-white/90">Receipt Verification</h2>
          <p className="text-sm text-white/60 mb-5">
            Easily verify receipts and log verified payments using AI-assisted smart tracking.
          </p>
          <button className="w-full py-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold shadow-md hover:opacity-90 transition-all">
            Verify Receipt
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
