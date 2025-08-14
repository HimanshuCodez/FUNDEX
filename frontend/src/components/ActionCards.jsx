import React, { useState } from "react";
import { Wallet, CreditCard, TrendingUp, User } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCards = () => {
  const [activeTab, setActiveTab] = useState("long");

  const longPlans = [
    { price: 550, daily: 120, days: 180, revenue: 21600 },
    { price: 1000, daily: 250, days: 200, revenue: 50000 },
    { price: 1000, daily: 250, days: 200, revenue: 50000 },
    { price: 1000, daily: 250, days: 200, revenue: 50000 },
    { price: 2000, daily: 500, days: 300, revenue: 150000 },
  ];

  const vipPlans = [
    { price: 5000, daily: 1500, days: 100, revenue: 150000 },
    { price: 10000, daily: 4000, days: 90, revenue: 360000 },
    { price: 10000, daily: 4000, days: 90, revenue: 360000 },
    { price: 10000, daily: 4000, days: 90, revenue: 360000 },
    { price: 20000, daily: 10000, days: 60, revenue: 600000 },
  ];

  const plans = activeTab === "long" ? longPlans : vipPlans;

  return (
    <div className="min-h-screen bg-gradient-to-b ">
      
      {/* Top Action Buttons */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="flex gap-20 bg-black/80 backdrop-blur-sm rounded-xl border border-yellow-400 p-4 shadow-2xl">
          {[
            { icon: <CreditCard size={28} />, label: "Recharge", to: "/recharge" },
            { icon: <Wallet size={28} />, label: "Withdraw", to: "/withdraw" },
            { icon: <TrendingUp size={28} />, label: "Invest", to: "/invest" },
            { icon: <User size={28} />, label: "Profile", to: "/account" },
          ].map((btn, i) => (
            <Link to={btn.to} key={i}>
              <div
                className="flex flex-col items-center justify-center w-20 h-20 cursor-pointer rounded-lg border border-white hover:bg-yellow-400/20 transition-all duration-200"
              >
                <div className="text-white mb-2">{btn.icon}</div>
                <span className="text-white text-xs font-medium">{btn.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Plan Cards */}
      <div className="flex justify-center px-4">
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl w-full max-w-md p-4 shadow-2xl">
          
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-black/20 rounded-xl p-1">
              {["long", "vip"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                    activeTab === tab
                      ? "bg-yellow-500 text-black shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                      : "bg-black text-white hover:bg-gray-700"
                  }`}
                >
                  {tab === "long" ? "Long Plans" : "VIP Plans"}
                  {activeTab === tab && (
                    <span className="absolute inset-0 rounded-lg animate-pulse bg-yellow-400/20"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plan List */}
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl"
            >
              <div className="flex items-center gap-4">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop"
                    alt="HOME"
                    className="rounded-xl w-28 h-20 object-cover border-2 border-yellow-400"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-black text-xs py-1 font-bold text-center">
                    HOME
                  </div>
                </div>
                
                {/* Plan Details */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-y-1 text-white text-sm mb-3">
                    <div>Price</div>
                    <div className="text-right font-semibold">₹ {plan.price}</div>
                    <div>Daily</div>
                    <div className="text-right font-semibold">₹ {plan.daily}</div>
                    <div>Days</div>
                    <div className="text-right font-semibold">{plan.days}</div>
                    <div>Total Revenue</div>
                    <div className="text-right font-semibold">₹ {plan.revenue}</div>
                  </div>
                  
                 <button className="rounded-full w-full py-2 font-bold text-sm shadow-lg animate-yellowBlackPulse">
  Buy Now
</button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ActionCards;
