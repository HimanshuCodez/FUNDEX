import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FiUser, FiLock, FiEye, FiEyeOff, FiHome, FiUsers, FiDollarSign, 
  FiTrendingUp, FiBell, FiSettings, FiLogOut,  FiPieChart,
  FiActivity, FiShoppingCart, FiMenu, FiX
} from 'react-icons/fi';
import { IndianRupeeIcon } from 'lucide-react';


const UsersTable = ({ users }) => (
  <div className="bg-white  text-black rounded-2xl shadow-lg p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-6">Users</h3>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-left py-2 px-3">Name</th>
            <th className="text-left py-2 px-3">Email</th>
            <th className="text-left py-2 px-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-t">
              <td className="py-2 px-3">{user.name}</td>
              <td className="py-2 px-3">{user.email}</td>
              <td className="py-2 px-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PaymentsTable = ({ payments, handleUpdatePaymentStatus, handleDeletePayment }) => (
    <div className="bg-white text-black rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Payments</h3>
        <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr>
                        <th className="text-left py-2 px-3">User</th>
                        <th className="text-left py-2 px-3">Amount</th>
                        <th className="text-left py-2 px-3">Status</th>
                        <th className="text-left py-2 px-3">Screenshot</th>
                        <th className="text-left py-2 px-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment._id} className="border-t">
                            <td className="py-2 px-3">{payment.user ? payment.user.name : 'User not found'}</td>
                            <td className="py-2 px-3">{payment.amount}</td>
                            <td className="py-2 px-3">{payment.status}</td>
                            <td className="py-2 px-3">
                                <a href={`https://fundex.onrender.com/${payment.screenshot}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    View
                                </a>
                            </td>
                            <td className="py-2 px-3 flex items-center space-x-2">
                                {payment.status === 'pending' && (
                                    <>
                                        <button
                                            onClick={() => handleUpdatePaymentStatus(payment, 'approved')}
                                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleUpdatePaymentStatus(payment, 'rejected')}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                                <button
                                    onClick={() => handleDeletePayment(payment._id)}
                                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition"
                                >
                                    Delete
                                </button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const PlansTable = ({ plans, handleDeletePlan }) => (
  <div className="bg-white text-black rounded-2xl shadow-lg p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-6">Plans</h3>
    <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
        <thead>
            <tr>
            <th className="text-left py-2 px-3">Image</th>
            <th className="text-left py-2 px-3">Name</th>
            <th className="text-left py-2 px-3">Price</th>
            <th className="text-left py-2 px-3">Daily</th>
            <th className="text-left py-2 px-3">Days</th>
            <th className="text-left py-2 px-3">Revenue</th>
            <th className="text-left py-2 px-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            {plans.map(plan => (
            <tr key={plan._id} className="border-t">
                <td className="py-2 px-3"><img src={plan.image} alt={plan.name} className="w-16 h-16 object-cover rounded-md" /></td>
                <td className="py-2 px-3">{plan.name}</td>
                <td className="py-2 px-3">{plan.price}</td>
                <td className="py-2 px-3">{plan.daily}</td>
                <td className="py-2 px-3">{plan.days}</td>
                <td className="py-2 px-3">{plan.revenue}</td>
                <td className="py-2 px-3">
                <button
                    onClick={() => handleDeletePlan(plan._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                    Delete
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  </div>
);

const CreatePlanForm = ({ handleCreatePlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    daily: '',
    days: '',
    revenue: '',
    image: null,
    type: 'long',
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreatePlan(formData);
    setFormData({
      name: '',
      price: '',
      daily: '',
      days: '',
      revenue: '',
      image: null,
      type: 'long',
    });
  };

  return (
    <div className="bg-white text-black rounded-2xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Plan</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Daily</label>
                <input type="number" name="daily" value={formData.daily} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Days</label>
                <input type="number" name="days" value={formData.days} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Revenue</label>
                <input type="number" name="revenue" value={formData.revenue} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="long">Long Plan</option>
                    <option value="vip">VIP Plan</option>
                </select>
            </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" name="image" onChange={handleChange} className="mt-1 block w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Create Plan</button>
      </form>
    </div>
  );
};


const FundexaDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [plans, setPlans] = useState([]);
  const [view, setView] = useState('dashboard'); // dashboard, users, payments, plans
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('token');
            } else {
                setIsLoggedIn(true);
            }
        } catch (e) {
            localStorage.removeItem('token');
        }
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUsers = async () => {
        try {
          const res = await axios.get('https://fundex.onrender.com/api/users', {
            headers: { 'x-auth-token': localStorage.getItem('token') }
          });
          setUsers(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      const fetchPayments = async () => {
        try {
          const res = await axios.get('https://fundex.onrender.com/api/payment', {
            headers: { 'x-auth-token': localStorage.getItem('token') }
          });
          setPayments(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      const fetchPlans = async () => {
        try {
          const res = await axios.get('https://fundex.onrender.com/api/plans', {
            headers: { 'x-auth-token': localStorage.getItem('token') }
          });
          setPlans(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchUsers();
      fetchPayments();
      fetchPlans();
    }
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fundex.onrender.com/api/auth/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('token', token);

      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userRes = await axios.get(`https://fundex.onrender.com/api/users/${decodedToken.user.id}`, {
          headers: { 'x-auth-token': token }
      });

      if (userRes.data.role === 'admin') {
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('You are not authorized to access this page');
        localStorage.removeItem('token');
      }
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleUpdatePaymentStatus = async (payment, status) => {
    try {
      await axios.put(`https://fundex.onrender.com/api/payment/${payment._id}`, { status }, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });

      setPayments(payments.map(p => p._id === payment._id ? { ...p, status } : p));

      if (status === 'approved') {
          const userToUpdate = users.find(u => u._id === payment.user._id);
          if(userToUpdate) {
              const updatedUsers = users.map(u => u._id === payment.user._id ? {...u, balance: u.balance + payment.amount} : u);
              setUsers(updatedUsers);
          }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreatePlan = async (formData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.post('https://fundex.onrender.com/api/plans', formData, config);
      setPlans([...plans, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlan = async (id) => {
    try {
      await axios.delete(`https://fundex.onrender.com/api/plans/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setPlans(plans.filter(plan => plan._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePayment = async (id) => {
    try {
      await axios.delete(`https://fundex.onrender.com/api/payment/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setPayments(payments.filter(payment => payment._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 w-full max-w-md">
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
              <p className="text-gray-300">Welcome back Admin! Please sign in to continue</p>
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
      <div className={`fixed left-0 top-0 w-64 h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                FUNDEXA
                </h1>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-600">
                <FiX size={24} />
            </button>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <button onClick={() => { setView('dashboard'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${view === 'dashboard' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'}`}>
              <FiHome size={20} />
              <span className="font-medium">Dashboard</span>
            </button>
            <button onClick={() => { setView('users'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${view === 'users' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'}`}>
              <FiUsers size={20} />
              <span className="font-medium">Users</span>
            </button>
            <button onClick={() => { setView('payments'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${view === 'payments' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'}`}>
              <IndianRupeeIcon size={20} />
              <span className="font-medium">Payments</span>
            </button>
            <button onClick={() => { setView('plans'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${view === 'plans' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'}`}>
              <FiActivity size={20} />
              <span className="font-medium">Plans</span>
            </button>
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

      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* Main Content */}
      <div className="md:ml-64 p-4 sm:p-8">
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center">
                <button onClick={() => setIsSidebarOpen(true)} className="md:hidden mr-4 text-gray-600">
                    <FiMenu size={24} />
                </button>
                <div>
                    <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Welcome back, Admin!</h2>
                    <p className="text-gray-600 hidden sm:block">Here's what's happening with your business today.</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300">
                <FiBell size={24} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{payments.filter(p => p.status === 'pending').length}</span>
                </button>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <FiUser className="text-white" size={20} />
                    </div>
                    <div className="hidden sm:block">
                        <p className="font-medium text-gray-900">Admin User</p>
                        <p className="text-sm text-gray-500">Administrator</p>
                    </div>
                </div>
            </div>
        </header>

        <main>
            {view === 'dashboard' && (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg`}>
                                <IndianRupeeIcon className="text-white" size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">₹{payments.reduce((acc, p) => p.status === 'approved' ? acc + p.amount : acc, 0)}</h3>
                        <p className="text-gray-600">Total Revenue</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg`}>
                                <FiUsers className="text-white" size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{users.length}</h3>
                        <p className="text-gray-600">Active Users</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg`}>
                                <FiTrendingUp className="text-white" size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{payments.filter(p => p.status === 'pending').length}</h3>
                        <p className="text-gray-600">Pending Payments</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center shadow-lg`}>
                                <FiShoppingCart className="text-white" size={24} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{payments.length}</h3>
                        <p className="text-gray-600">Total Payments</p>
                    </div>
                </div>
            </>
            )}

            {view === 'users' && <UsersTable users={users} />} 

            {view === 'payments' && <PaymentsTable payments={payments} handleUpdatePaymentStatus={handleUpdatePaymentStatus} handleDeletePayment={handleDeletePayment} />} 

            {view === 'plans' && (
            <>
                <CreatePlanForm handleCreatePlan={handleCreatePlan} />
                <PlansTable plans={plans} handleDeletePlan={handleDeletePlan} />
            </>
            )} 
        </main>
      </div>
    </div>
  );
};

export default FundexaDashboard;