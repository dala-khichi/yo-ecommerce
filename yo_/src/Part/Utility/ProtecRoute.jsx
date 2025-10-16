import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="w-screen h-screen flex  flex-col justify-center items-center"><h3>Loading.....</h3></div>; // ⏳ Wait until isLogin() finishes
  }

  if (!user.isLogin) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;