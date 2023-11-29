import React, { useContext } from "react";
import { AuthContext } from "../Imports";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};
export default ProtectedRoute;
