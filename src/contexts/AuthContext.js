import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const AutProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
  };

  const values = {
    user,
    loggedIn,
    login,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AutProvider, useAuth };
