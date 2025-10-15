import React from 'react'

const MyAccountButton = ({text,onClick}) => {
  return (
 <div  onClick={onClick} className="w-full  mt-6 text-white centre bg-black h-14">
         {text}
       </div>
  )
}

export default MyAccountButton