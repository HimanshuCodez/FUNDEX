
import React from 'react';
import './ActionCards.css';
import { FaMoneyBillWave, FaUsers, FaPaperPlane, FaChartLine, FaTelegramPlane } from 'react-icons/fa';

const ActionCards = () => {
  return (
    <div className="action-cards">
      <div className="card">
        <FaMoneyBillWave size={40} />
        <span>Recharge</span>
      </div>
      <div className="card">
        <FaUsers size={40} />
        <span>Team</span>
      </div>
      <div className="card">
        <FaPaperPlane size={40} />
        <span>Invest</span>
      </div>
      <div className="card">
        <FaChartLine size={40} />
        <span>Withdraw</span>
      </div>
      <div className="card">
        <FaTelegramPlane size={40} />
        <span>Telegram</span>
      </div>
    </div>
  );
};

export default ActionCards;
