import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (username, password) => {
    const fakeToken = '123456789';
    const fakeUser = { name: username };

    setToken(fakeToken);
    setUser(fakeUser);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return { user, token, login, logout };
};

export default useAuth;