import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
