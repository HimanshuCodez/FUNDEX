import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsAdmin(false);
          return;
        }

        await axios.get('/api/auth/admin-check', {
          headers: { 'x-auth-token': token },
        });
        setIsAdmin(true);
      } catch (err) {
        setIsAdmin(false);
      }
    };

    checkAdminStatus();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>; // Or a spinner
  }

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;