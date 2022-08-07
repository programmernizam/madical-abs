import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminAuth = () => {
  const admin = false;
  const location = useLocation();
  if (!admin) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <Outlet />;
};

export default AdminAuth;
