import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
