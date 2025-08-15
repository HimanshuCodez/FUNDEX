import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import FundexaDashboard from "./Admin/Dashboard";
import Home from "./page/Home";
import Invest from "./page/Invest";
import Withdraw from "./page/Withdraw";
import Account from "./page/Account";
import { AddCash } from "./page/AddCash";
import Pay from "./page/Pay";
import Login from "./page/Login";
import Signup from "./page/Signup";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import PaymentConfirmation from "./page/PaymentConfirmation";

function App() {
  return (
    <Router>
      <ToastContainer />
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/dashboard" element={<AdminRoute><FundexaDashboard /></AdminRoute>} />
            <Route path="/recharge" element={<AddCash />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/payment-confirmation" element={<PrivateRoute><PaymentConfirmation /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/signup" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;