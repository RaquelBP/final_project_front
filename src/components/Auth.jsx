export const authenticateUser = async (email, password) => {

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    

    if (!response.ok) {
      throw new Error('Authentication failed')
    }
    
    const data = await response.json()

    return data

  } catch (error) {

    console.error('Error during authentication:', error)
    throw error
    
  }
}
