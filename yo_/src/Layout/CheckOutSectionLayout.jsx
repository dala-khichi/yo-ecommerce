import React from 'react'

const CheckOutSectionLayout = ({children,heading,subHeading}) => {
  return (
            <div className="w-full">
              <div className="flex flex-row items-end justify-between ">
        <h3 className="text-xl font-semibold ">{heading}</h3>
        <li className="text-sm underline list-none text-green-900">{subHeading}</li>
        </div>
        
              {children}
    
    
        
        </div>
  )
}

export default CheckOutSectionLayout