import { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Yo from "../Part/Utility/Axios"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const go = useNavigate();

  
  
  const [user, setUser] = useState({
    isLogin:false,
    name:"",
    phone:"",
    email:"",
    id:null,
    
  }); // or use token instead

const isLogin= async()=>{
  try {
  const res =  await Yo.get("/api/user-auth/is-login")
   const {name,phone,email,id }= res.data
   
    setUser({...user,
    isLogin:true,
    name:name,
    phone:phone,
    email:email,
    id:id,
    });
  } catch (error) {
   console.log("not login");
  }
}

 useEffect(() => { 
  isLogin()
  }, []);




  const login = async (userData) => {
    try {
      
   const res =  await Yo.post("/api/user-auth/login" ,
   //{phoneOrEmail:"1234567891",password:"10"}
   userData
   )
   const {name,phone,email,id }= res.data
    setUser({...user,
    isLogin:true,
    name:name,
    phone:phone,
    email:email,
    id:id,
      
    });
    go('/')
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    // remove token from storage if used
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
