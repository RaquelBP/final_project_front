import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import Login from '../pages/Login'

const LoadingMessage = () => <div>Cargando...</div> // Mensaje de carga

export const LoginRoute = () => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />
  
  return user ? <Navigate to="/profile" /> : <Login />
}

export const ProtectedRoute = ({ component }) => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />
  
  return user ? component : <Navigate to="/login" />
}

export const AdminRoute = ({ component }) => {
  const { user, loading } = useUser()
  if (loading) return <LoadingMessage />
  
  if (!user) {

    return <Navigate to="/login" />

  } else if (!user.is_admin) {
  
    return <Navigate to="/profile" />
  }
  
  return component
}
