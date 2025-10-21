import React from 'react'

const LoginInput = ({onChange}) => {
  return (
     <div className="w-full bg-gray-100 p-2
            border-b-gray-400  border-b-[1px]">         
           <input 
           onChange={onChange}
            placeholder="Enter your name" className="block border-0 rounded-none
            text-xl text-gray-600
            outline-0 px-1 bg-transparent w-full h-full" />
            </div>
            
  )
}

export default LoginInput