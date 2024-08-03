import React from 'react'
import { useUser } from '../context/UserContext'
import { Link } from "react-router-dom"

const UserProfile = () => {
  const { user, logout } = useUser()


  return (
    <div className='profile page'>
      <h1>Perfil del Usuario</h1>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <Link to="/admin/dashboard" className="backLink"><p className="backP">Dashboard</p></Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>No estás logueado.</p>
      )}
      
    </div>
  )
}

export default UserProfile
