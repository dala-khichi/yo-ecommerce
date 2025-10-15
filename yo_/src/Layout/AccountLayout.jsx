import React from 'react'
import {
  Link,
  Outlet
} from "react-router-dom";


const AccountLayout = () => {
  return (
       <div className="min-h-[100vh]  pt-28 pb-10 font-[Inter] bg-white ">
      <div className="w-full gap-11 centre flex-col px-7   "> 
      
       <div className="w-full px-4 bg-gray-100 ">
       <Link to="/account/order">
       <h1 className="text-2xl py-4 border-b border-black font-normal
       ">My Order</h1>
         
       </Link>
              <Link to="/account/address">
                
            
       <h1 className="text-2xl text-gray-500 py-4 border-b-gray-400 border-b  font-normal">My
       Addresses</h1>
              </Link>

              <Link to="/account/info">
                
       <h1 className="text-2xl py-4 border-b border-b-gray-400 text-gray-500 font-normal">My
       Information</h1>
       
              </Link>
      
       
       <div className="w-full mt-12 text-white centre bg-black h-14 dark-bg-l">
         Log out 
       </div>
       
       
       
       </div>
      
      <div className="w-full">
        <h1 className="text-2xl text-black pb-4"> My Account </h1>
        
        
        <Outlet />
        
      </div>
      </div>
    </div>
   
   
   
  )
}

export default AccountLayout