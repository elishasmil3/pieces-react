import React from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
