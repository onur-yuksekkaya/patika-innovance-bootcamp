/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStroge';

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);

  const login = (user) => {
    if (user.username === 'kodluyoruz' && user.password === 'bootcamp109') {
      setIsLogged(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLogged(false);
  };

  const value = { isLogged, login, logout };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
