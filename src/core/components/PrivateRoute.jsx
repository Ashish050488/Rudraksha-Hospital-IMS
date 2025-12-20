import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check for user info in local storage
  const userInfo = localStorage.getItem('userInfo');
  
  // If user is not logged in, redirect to login
  return userInfo ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;