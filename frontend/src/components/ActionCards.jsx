
import React from 'react';
import { FaMoneyBillWave, FaUsers, FaPaperPlane, FaChartLine, FaTelegramPlane, FaWallet, FaMoneyBill, FaUser } from 'react-icons/fa';

const ActionCards = () => {
  return (
    <div className="flex justify-center items-center p-5 ">
      <div className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-black rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:-translate-y-1">
        <FaMoneyBillWave size={40} />
        <span className="mt-2 text-base">Recharge</span>
      </div>
      <div className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-black rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:-translate-y-1">
        <FaWallet size={40} />
        <span className="mt-2 text-base">Withdraw</span>
      </div>
      
      <div className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-black rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:-translate-y-1">
        <FaMoneyBill size={40} />
        <span className="mt-2 text-base">Invest</span>
      </div>
      
      <div className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-black rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:-translate-y-1">
        <FaUser size={40} />
        <span className="mt-2 text-base">Account</span>
      </div>
    </div>
  );
};

export default ActionCards;
