import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: JSX.Element;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const token: string | null = localStorage.getItem('token') || null;

  return token ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
