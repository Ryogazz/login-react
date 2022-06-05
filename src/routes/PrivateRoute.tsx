import React from 'react';
import { Navigate } from 'react-router-dom';
import StoresProvider from '../Context/StoresProvider';

interface PrivateRouteProps {
  element: JSX.Element;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const token: string | null = localStorage.getItem('token') || null;
  return token ? <StoresProvider>{ element }</StoresProvider> : <Navigate to="/login" />;
}

export default PrivateRoute;
