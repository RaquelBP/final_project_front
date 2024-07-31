import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Login from '../pages/Login';

const LoadingMessage = () => <div>Cargando...</div> // Mensaje de carga

export const LoginRoute = () => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />
  console.log("LoginRoute user:", user)
  return user ? <Navigate to="/profile" /> : <Login />
}

export const ProtectedRoute = ({ component }) => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />
  console.log("ProtectedRoute user:", user)
  return user ? component : <Navigate to="/login" />
};

export const AdminRoute = ({ component }) => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />

  console.log("AdminRoute user:", user)
  
  if (!user) {
    console.log("NotUser")
    return <Navigate to="/login" />
  } else if (!user.is_admin) {
    console.log("AdminRoute user (not admin):", user)
    return <Navigate to="/profile" />
  }
  
  return component
};
