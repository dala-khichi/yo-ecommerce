import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";
import Input from '../../Part/Utility/Input/Input';

const Login = () => {
  const go = useNavigate();
  const { login, user } = useAuth();

  const [data, setData] = useState({
    phoneOrEmail: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleInput = (key, value) => {
    setData({ ...data, [key]: value });
    setErrors({ ...errors, [key]: "" }); // Clear error on change
  };

  useEffect(() => {
    if (user.isLogin) go("/");
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!data.phoneOrEmail.trim()) newErrors.phoneOrEmail = "Email or phone is required.";
    if (!data.password.trim()) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      login(data);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="centre py-10 flex-col gap-3">
        <Input
        label="Email or Phone"
        error={errors.phoneOrEmail}
          onChange={(e) => handleInput("phoneOrEmail", e.target.value)}
          placeholder="Enter your email or phone"
        />

        <Input
         error={errors.password}
         label="Password"
          onChange={(e) => handleInput("password", e.target.value)}
          placeholder="Enter your password"
          type="password"
        />

        <div className="text-xs w-full py-2 text-right">Forgot password ?</div>

        <div
          onClick={handleLogin}
          className="w-full centre text-xl text-white h-12 bg-gray-900 cursor-pointer"
        >
          Login
        </div>
      </div>
    </form>
  );
};

export default Login;
