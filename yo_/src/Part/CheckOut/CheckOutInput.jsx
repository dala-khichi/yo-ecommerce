import React from 'react'

const CheckOutInput = ({onChange,value,type="text" ,placeholder="placeholder"}) => {
  
  
  return (
    <div className="w-full h-14 mt-3 rounded rounded-lg">
      <input onChange={onChange} value={value} type={type} className="border-2 px-5  outline-1 outline-green-900 text-sm
      font-normal  rounded-lg dark-bg" placeholder="email "/>
    </div>
  )
}

export default CheckOutInput