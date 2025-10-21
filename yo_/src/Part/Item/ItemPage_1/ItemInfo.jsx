import React from 'react'

const ItemInfo = ({ name, price }) => {
  return (
    <div className="w-full font-semibold pt-5 flex flex-col gap-1 text-black bg-white">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <h2 className="text-gray-400">Vert Arctic</h2>
      <h2 className="text-sm gap-0.5 jstart flex-row font-medium">
        {[1,2,3,4,5].map((element, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="15" height="15" fill="currentColor" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2, 15 9, 22 9, 17 14, 19 21, 12 17, 5 21, 7 14, 2 9, 9 9"></polygon>
          </svg>
        ))}
        <span className="pl-2">720 Reviews</span>
      </h2>
      <h2 className="text-xl">{price ? `${price}€` : 'Select options'}</h2>
    </div>
  )
}

export default ItemInfo