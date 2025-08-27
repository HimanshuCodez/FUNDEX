import React, { useState, useEffect } from "react";
import { Wallet, CreditCard, TrendingUp, User } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const ActionCards = () => {
  const [activeTab, setActiveTab] = useState("long");
  const [plans, setPlans] = useState([]);
  const [userBalance, setUserBalance] = useState(0);
  const [userCurrentPlan, setUserCurrentPlan] = useState(null);

  useEffect(() => {
    const fetchPlansAndUser = async () => {
      try {
        const plansRes = await axios.get("https://fundex.onrender.com/api/plans");
        if (Array.isArray(plansRes.data)) {
          setPlans(plansRes.data);
        } else {
          setPlans([]);
          console.error("API did not return an array for plans:", plansRes.data);
        }

        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.user.id;
          const userRes = await axios.get(`https://fundex.onrender.com/api/users/${userId}`, {
            headers: { "x-auth-token": token },
          });
          setUserBalance(userRes.data.balance);
          setUserCurrentPlan(userRes.data.currentPlan);
        }
      } catch (err) {
        console.error(err);
        setPlans([]); // Ensure plans is an array on error
      }
    };
    fetchPlansAndUser();
  }, []);

  const handleBuyPlan = async (planId, planPrice) => {
    try {
      if (userBalance < planPrice) {
        toast.error("Recharge first to buy this plan.");
        return;
      }

      if (userCurrentPlan) {
        toast.error("You already have an active plan.");
        return;
      }

      const res = await axios.post(
        "https://fundex.onrender.com/api/users/buy-plan",
        { planId },
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
        }
      );
      toast.success(res.data.msg);
      setUserBalance(res.data.user.balance);
      setUserCurrentPlan(res.data.user.currentPlan);
    } catch (err) {
      toast.error(err.response.data.msg || "Failed to purchase plan.");
      console.error(err);
    }
  };

  const longPlans = Array.isArray(plans)
    ? plans.filter((plan) => plan.type === "long")
    : [];
  const vipPlans = Array.isArray(plans)
    ? plans.filter((plan) => plan.type === "vip")
    : [];

  const displayedPlans = activeTab === "long" ? longPlans : vipPlans;

  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Top Action Buttons */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 bg-black/80 backdrop-blur-sm rounded-xl border border-yellow-400 p-4 shadow-2xl">
          {[
            {
              icon: <CreditCard size={28} />,
              label: "Recharge",
              to: "/recharge",
            },
            { icon: <Wallet size={28} />, label: "Withdraw", to: "/withdraw" },
            { icon: <TrendingUp size={28} />, label: "Invest", to: "/invest" },
            { icon: <User size={28} />, label: "Profile", to: "/account" },
          ].map((btn, i) => (
            <Link to={btn.to} key={i}>
              <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 cursor-pointer rounded-lg border border-white hover:bg-yellow-400/20 transition-all duration-200">
                <div className="text-white mb-2">{btn.icon}</div>
                <span className="text-white text-xs font-medium">
                  {btn.label}
                </span>
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
                ? "bg-black text-white hover:bg-gray-700"
                : "bg-yellow-500 text-black shadow-[0_0_15px_rgba(255,215,0,0.8)]"
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
    {displayedPlans.map((plan, idx) => (
      <div
        key={idx}
        className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl text-white"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-xl mb-3">
          <img
            src={`https://fundex.onrender.com/${plan.image}`}
            alt={plan.name}
            className="w-full h-40 object-cover rounded-xl border-2 border-yellow-400"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-black text-sm py-1 font-bold text-center">
            {plan.name}
          </div>
        </div>

        {/* Plan Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span className="font-semibold">₹ {plan.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Daily</span>
            <span className="font-semibold">₹ {plan.daily}</span>
          </div>
          <div className="flex justify-between">
            <span>Days</span>
            <span className="font-semibold">{plan.days}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Revenue</span>
            <span className="font-semibold">₹ {plan.revenue}</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          {userCurrentPlan === plan._id ? (
            <button className="rounded-full w-full py-2 font-bold text-sm shadow-lg bg-gray-500 text-white cursor-not-allowed">
              Already Buyed
            </button>
          ) : (
            <button
              onClick={() => handleBuyPlan(plan._id, plan.price)}
              className="rounded-full w-full py-2 font-bold text-sm shadow-lg animate-yellowBlackPulse"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default ActionCards;