import React, { createContext, useContext, useState, useEffect } from "react";

const authContext = createContext();

// wrap our app
export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(false);
  };

  useEffect(() => {

    try {
      const token = localStorage.getItem("token");
      if (token) setIsLoggedIn(true);
      
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) setUser(user);

    } catch (error) {
      logout()
    }
      
  }, [isLoggedIn]);

  const updateToken = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUser(user);
  };

  return {
      user,
      isLoggedIn,
      updateToken,
      logout,
  };
}
