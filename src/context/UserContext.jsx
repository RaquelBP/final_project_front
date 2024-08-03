import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchUserData = () => {
      const loggedUser = JSON.parse(localStorage.getItem('user'))
      const storedToken = localStorage.getItem('token')

      if (loggedUser && storedToken) {
        setUser(loggedUser)
        setToken(storedToken)
      }

      setLoading(false)

    }

    fetchUserData()
    
  }, [])

  const login = (userData, tokenData) => {
    //console.log("UserContext login:", userData, tokenData)
    setUser(userData)
    setToken(tokenData)

    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', tokenData)

  }

  const logout = () => {
    setUser(null)
    setToken(null)

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    
  }

  return (
    <UserContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
