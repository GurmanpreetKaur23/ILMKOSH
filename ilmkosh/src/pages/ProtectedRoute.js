// src/pages/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem('user');

  return isLoggedIn ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
