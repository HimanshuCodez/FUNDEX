import React, { useState } from 'react';
import { 
  FiUser, FiLock, FiEye, FiEyeOff, FiHome, FiUsers, FiDollarSign, 
  FiTrendingUp, FiBell, FiSettings, FiLogOut,  FiPieChart,
  FiActivity, FiShoppingCart, FiMail, FiPhone, FiMapPin
} from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const FundexaDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dummy data for charts
  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000 },
    { month: 'Feb', revenue: 52000, expenses: 38000 },
    { month: 'Mar', revenue: 48000, expenses: 35000 },
    { month: 'Apr', revenue: 61000, expenses: 42000 },
    { month: 'May', revenue: 55000, expenses: 40000 },
    { month: 'Jun', revenue: 67000, expenses: 45000 }
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1800 },
    { month: 'Mar', users: 2400 },
    { month: 'Apr', users: 3200 },
    { month: 'May', users: 2800 },
    { month: 'Jun', users: 3800 }
  ];

  const categoryData = [
    { name: 'Technology', value: 35, color: '#8b5cf6' },
    { name: 'Finance', value: 25, color: '#06d6a0' },
    { name: 'Healthcare', value: 20, color: '#f59e0b' },
    { name: 'Education', value: 20, color: '#ef4444' }
  ];

  const salesData = [
    { day: 'Mon', sales: 120 },
    { day: 'Tue', sales: 200 },
    { day: 'Wed', sales: 150 },
    { day: 'Thu', sales: 280 },
    { day: 'Fri', sales: 320 },
    { day: 'Sat', sales: 250 },
    { day: 'Sun', sales: 180 }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 w-full max-w-md">
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-16 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">F</span>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                FUNDEXA
              </h1>
              <p className="text-gray-300">Welcome back! Please sign in to continue</p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 mb-6 text-red-200 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400">
                Demo credentials: admin123@gmail.com / admin123
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-xl z-30">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FUNDEXA
            </h1>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {[
              { icon: FiHome, label: 'Dashboard', active: true },
              { icon: FiUsers, label: 'Users' },
             
              { icon: FiShoppingCart, label: 'Sales' },
              { icon: FiDollarSign, label: 'Finance' },
              { icon: FiSettings, label: 'Settings' }
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
          >
            <FiLogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h2>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300">
              <FiBell size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <FiUser className="text-white" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Admin User</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: 'Total Revenue', 
              value: '$348,000', 
              change: '+12.5%', 
              icon: FiDollarSign, 
              color: 'from-green-600 to-emerald-600',
              bgColor: 'bg-green-50'
            },
            { 
              title: 'Active Users', 
              value: '3,847', 
              change: '+8.2%', 
              icon: FiUsers, 
              color: 'from-blue-600 to-cyan-600',
              bgColor: 'bg-blue-50'
            },
            { 
              title: 'Sales Growth', 
              value: '28.5%', 
              change: '+4.1%', 
              icon: FiTrendingUp, 
              color: 'from-purple-600 to-indigo-600',
              bgColor: 'bg-purple-50'
            },
            { 
              title: 'Total Orders', 
              value: '1,249', 
              change: '+15.3%', 
              icon: FiShoppingCart, 
              color: 'from-orange-600 to-red-600',
              bgColor: 'bg-orange-50'
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Revenue vs Expenses</h3>
              <FiActivity className="text-purple-600" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255,255,255,0.95)', 
                    border: 'none', 
                    borderRadius: '12px', 
                    shadow: '0 4px 6px rgba(0,0,0,0.1)' 
                  }} 
                />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.8} />
                <Area type="monotone" dataKey="expenses" stackId="2" stroke="#06d6a0" fill="#06d6a0" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">User Growth</h3>
              <FiTrendingUp className="text-blue-600" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255,255,255,0.95)', 
                    border: 'none', 
                    borderRadius: '12px', 
                    shadow: '0 4px 6px rgba(0,0,0,0.1)' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Category Distribution</h3>
              <FiPieChart className="text-indigo-600" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Sales */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Weekly Sales</h3>
              
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255,255,255,0.95)', 
                    border: 'none', 
                    borderRadius: '12px', 
                    shadow: '0 4px 6px rgba(0,0,0,0.1)' 
                  }} 
                />
                <Bar dataKey="sales" fill="#06d6a0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { icon: FiUsers, label: 'Add New User', color: 'bg-blue-600' },
                { icon: FiMail, label: 'Send Newsletter', color: 'bg-green-600' },
                { icon: FiSettings, label: 'System Settings', color: 'bg-purple-600' },
                { icon: FiPhone, label: 'Contact Support', color: 'bg-orange-600' }
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="text-white" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundexaDashboard;