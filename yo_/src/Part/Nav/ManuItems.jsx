import React from 'react'


const ManuItems = ({text,onClick}) => {

  return (
    <div  className="flex  flex-row justify-between items-center">
      <h1 className="text-xl font-semibold">{text}</h1>
      <div onClick={onClick} className="scale-[1.2]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      
    </div>
  )
}

export default ManuItems