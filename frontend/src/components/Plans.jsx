import React, { useState } from "react";

const PlanCard = () => {
  const [activeTab, setActiveTab] = useState("long");

  const plans = [
    {
      name: "HOME",
      img: "https://via.placeholder.com/150x100.png?text=Home",
      price: 550,
      daily: 120,
      days: 180,
    },
    {
      name: "3 BHK FLAT",
      img: "https://via.placeholder.com/150x100.png?text=3+BHK",
      price: 1990,
      daily: 495,
      days: 170,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-yellow-600 rounded-xl shadow-lg w-full max-w-md p-4">
        {/* Tabs */}
        <div className="flex justify-between border-b border-black mb-4">
          <button
            className={`flex-1 py-2 font-bold ${
              activeTab === "long"
                ? "border-b-2 border-black text-black"
                : "text-black/70"
            }`}
            onClick={() => setActiveTab("long")}
          >
            Long Plans
          </button>
          <button
            className={`flex-1 py-2 font-bold ${
              activeTab === "vip"
                ? "border-b-2 border-black text-black"
                : "text-black/70"
            }`}
            onClick={() => setActiveTab("vip")}
          >
            VIP Plans
          </button>
        </div>

        {/* Plans */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-xl p-4 mb-4 shadow-md border border-gray-500"
          >
            <div className="flex gap-4">
              <img
                src={plan.img}
                alt={plan.name}
                className="w-24 h-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="bg-yellow-600 text-black px-2 py-0.5 text-sm rounded font-bold inline-block">
                  {plan.name}
                </p>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Price</span> <span>₹ {plan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily</span> <span>₹ {plan.daily}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Days</span> <span>{plan.days}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Revenue</span>
                    <span>₹ {plan.daily * plan.days}</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-yellow-600 text-black font-bold w-full mt-4 py-2 rounded-full hover:bg-yellow-500 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
