import React from 'react'
import {
  Link,
  Outlet
} from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="w-screen font-[Inter] h-screen bg-white relative relative centre pt-3 z-[10]">

      <div className="">
        <h1 className="text-4xl text-center">My account</h1>

        <div className="centre gap-10 pt-6 flex-row text-2xl ">
          <Link to="/auth/login" className="">
            <h1 className="">Login</h1>
            <hr className="border-black" />
        </Link>
        
        
        <Link to="/auth/signup" className="">
          <h1 className="">Sign Up</h1>
          <hr className="border-black" />
      </Link>
    </div>
    <Outlet />
  </div>
</div>


)
}

export default AuthLayout