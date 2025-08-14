import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FundexaDashboard from "./Admin/Dashboard";
import Home from "./page/Home";
import Invest from "./page/Invest";
import Withdraw from "./page/Withdraw";

import Account from "./page/Account";
import { AddCash } from "./page/AddCash";

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* Background video */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          src="/bgvid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="relative z-10 text-white bg-black/40 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<FundexaDashboard />} />
            <Route path="/recharge" element={<AddCash />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
