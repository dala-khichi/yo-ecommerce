import React from 'react'

const MyAccount = () => {
  return (
    <div className="page bg-white">
      <div className="w-full gap-11 px-7 flex-col h-[100vh] centre "> 
      
       <div className="w-full px-4 bg-gray-100">
       
       <h1 className="text-2xl py-4 border-b border-black font-normal
       ">My Order</h1>
       <h1 className="text-2xl text-gray-500 py-4 border-b-gray-400 border-b  font-normal">My
       Addresses</h1>
       <h1 className="text-2xl text-gray-500 py-4 border-b border-b-gray-400 font-normal">My Order</h1>
       <h1 className="text-2xl py-4 border-b border-b-gray-400 text-gray-500 font-normal">My
       Information</h1>
       
      
       
       <div className="w-full mt-12 text-white centre bg-black h-14">
         Log out 
       </div>
       
       
       
       </div>
      
      <div className="w-full">
        <h1 className="text-2xl text-black "> My Account </h1>
        
        
      </div>
      
      
      
      
      
      
      </div>
    </div>
  )
}

export default MyAccount