import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Yo from "../Part/Utility/Axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const go = useNavigate();
  const [loading, setLoading] = useState(true); // 👈 added
  const [user, setUser] = useState({
    isLogin: false,
    name: "",
    phone: "",
    email: "",
    id: null,
  });

  const isLogin = async () => {
    try {
      const res = await Yo.get("/api/user-auth/is-login");
      const { name, phone, email, id } = res.data;

      setUser({
        isLogin: true,
        name,
        phone,
        email,
        id,
      });
    } catch (error) {
      console.log("Not logged in");
      setUser({
        isLogin: false,
        name: "",
        phone: "",
        email: "",
        id: null,
      });
    } finally {
      setLoading(false); // 👈 important
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const login = async (userData) => {
    try {
      const res = await Yo.post("/api/user-auth/login", userData);
      const { name, phone, email, id } = res.data;
      setUser({
        isLogin: true,
        name,
        phone,
        email,
        id,
      });
      go("/");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser({
      isLogin: false,
      name: "",
      phone: "",
      email: "",
      id: null,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);