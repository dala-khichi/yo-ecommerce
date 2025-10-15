import React, { useState } from 'react';
import Input from '../../Part/Utility/Input/Input';
import Yo from '../../Part/Utility/Axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const go = useNavigate();
  
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (key, value) => {
    setData({ ...data, [key]: value });
    setErrors({ ...errors, [key]: '' }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email))
      newErrors.email = "Invalid email format.";
    if (!data.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^[0-9]{10}$/.test(data.phone))
      newErrors.phone = "Phone must be 10 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      console.log("Send to backend:", data);
      
      try {
        Yo.post("/api/user-auth/register",data)
        go('./auth/login');
      } catch (error) {
        setErrors(prev => ({...prev, yo: error.message}))
      }
      
      
      
      
      // Call signup function or API
    }
  };



  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="centre px-7 py-10 flex-col gap-3">
        <Input
          error={errors.name}
          label="Name"
          placeholder="Enter your Name"
          onChange={(e) => handleInput('name', e.target.value)}
        />

        <Input
                  error={errors.email}
         label="Email"
          placeholder="Enter your Email"
          onChange={(e) => handleInput('email', e.target.value)}
        />

        <Input
          error={errors.phone}
          label="Phone"
          placeholder="Enter your Phone"
          onChange={(e) => handleInput('phone', e.target.value)}
        />

        <Input
         error={errors.password}
         label="Password"
          placeholder="Enter your Password"
          onChange={(e) => handleInput('password', e.target.value)}
        />

        <div
          onClick={handleSignUp}
          className="w-full mt-5 centre text-xl text-white h-12 bg-gray-900 cursor-pointer"
        >
          Sign Up
        </div>
        {errors.yo && <div className="text-red-500 text-xs">{errors.yo}</div>}
      </div>
    </form>
  );
};

export default SignUp;
