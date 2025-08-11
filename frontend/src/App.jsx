import React from 'react';
import './App.css';
import Carousel from './Carousel';
import ActionCards from './ActionCards';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FundexaDashboard from './page/Dashboard';

function App() {
  const slides = [
    { image: 'https://techeor.co.in/suceed-15/images/product/b-4.jpg' },
    { image: 'https://techeor.co.in/suceed-15/images/product/b-3.jpg' },
    { image: 'https://techeor.co.in/suceed-15/images/product/b-2.jpg' },
  ];

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav style={{ padding: "10px", background: "#f5f5f5" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
         
                <video autoPlay loop muted className="background-video">
                  <source src="/bgvid.mp4" type="video/mp4" />
                </video>
                <div className="content">
                  <Carousel slides={slides} />
                  <ActionCards />
                </div>
              </>
            }
          />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<FundexaDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
