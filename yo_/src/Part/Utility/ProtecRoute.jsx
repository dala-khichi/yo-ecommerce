import React from 'react'
import {useAuth} from "../../Context/AuthContext"
import { Navigate } from 'react-router-dom';

const ProtecRoute = ({children}) => {
  const {user} = useAuth()
  if (!user.isLogin) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}

export default ProtecRoute