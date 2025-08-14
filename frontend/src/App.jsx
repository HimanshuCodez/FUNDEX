import React from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FundexaDashboard from "./Admin/Dashboard";
import Home from "./page/Home";
import ActionCards from "./components/ActionCards";

function App() {
  return (
  
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bgvid.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white bg-black/40">
       <Home/>
      </div>
    </div>
  );
}

    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<FundexaDashboard />} />
      </Routes>
    </Router>
 
export default App;
