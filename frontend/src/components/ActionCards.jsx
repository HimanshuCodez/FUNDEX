import React from "react";
import { Wallet, CreditCard, Users, TrendingUp, Send, User } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-400 via-gray-500 to-gray-600" 
         >
      
      {/* Top Action Buttons */}
     <div className="flex justify-center pt-8 pb-4">
  <div className="flex gap-6 bg-black/80 backdrop-blur-sm rounded-xl border border-yellow-400 p-4 shadow-2xl">
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

     {/* from-gray-500 to-yellow-600 */}
      {/* Plan Cards */}
      <div className="flex justify-center px-4">
        <div className="bg-gradient-to-r bg-yellow-300 rounded-2xl w-full max-w-md p-4  shadow-2xl">
          
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-black/20 rounded-xl p-1">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm">
                Long Plans
              </button>
              <button className="text-black px-6 py-2 rounded-lg font-semibold text-sm">
                VIP Plans
              </button>
            </div>
          </div>

          {/* First Plan Card */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=100&fit=crop&crop=house"
                  alt="HOME"
                  className="rounded-xl w-24 h-16 object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                  HOME
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-y-1 text-white text-sm mb-3">
                  <div>Price</div>
                  <div className="text-right font-semibold">₹ 550</div>
                  <div>Daily</div>
                  <div className="text-right font-semibold">₹ 120</div>
                  <div>Days</div>
                  <div className="text-right font-semibold">180</div>
                  <div>Total Revenue</div>
                  <div className="text-right font-semibold">₹ 21600</div>
                </div>
                
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full w-full py-2 font-bold text-sm hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Second Plan Card */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=100&fit=crop&crop=house"
                  alt="HOME"
                  className="rounded-xl w-24 h-16 object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                  HOME
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-y-1 text-white text-sm mb-3">
                  <div>Price</div>
                  <div className="text-right font-semibold">₹ 550</div>
                  <div>Daily</div>
                  <div className="text-right font-semibold">₹ 120</div>
                  <div>Days</div>
                  <div className="text-right font-semibold">180</div>
                  <div>Total Revenue</div>
                  <div className="text-right font-semibold">₹ 21600</div>
                </div>
                
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full w-full py-2 font-bold text-sm hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Third Plan Card */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=100&fit=crop&crop=house"
                  alt="HOME"
                  className="rounded-xl w-24 h-16 object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                  HOME
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-y-1 text-white text-sm mb-3">
                  <div>Price</div>
                  <div className="text-right font-semibold">₹ 550</div>
                  <div>Daily</div>
                  <div className="text-right font-semibold">₹ 120</div>
                  <div>Days</div>
                  <div className="text-right font-semibold">180</div>
                  <div>Total Revenue</div>
                  <div className="text-right font-semibold">₹ 21600</div>
                </div>
                
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full w-full py-2 font-bold text-sm hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ActionCards;