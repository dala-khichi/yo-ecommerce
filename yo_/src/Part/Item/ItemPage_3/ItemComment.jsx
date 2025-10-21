import React from 'react'

const ItemComment = () => {
  return (
    <div className=" w-full flex p-5 flex-col gap-6 bg-white">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-light ">STÉPHANE C.</h1>
        <h4 className="text-sm font-semibold text-gray-500">30/10/2024</h4>
      </div>
      
      
      
      <div className="">
        <li className="list-none text-xs pb-2 font-light  ">CONFORT ET RÉSISTANCE - VOLA</li>
        <p className="text-sm font-normal leading-6 text-gray-500">J'ai à nouveau commandé une paire de Vola et ai retrouvé le confort et la chaleur (sans la transpiration) de ce même modèle précédemment portée pendant 3 automnes/hivers. Au bout de ces 3 années, la semelle était usée mais le dessus en laine et le collage entre les deux avaient parfaitement tenu !</p>
      </div>
      
      
      <li className="text-sm list-none font-light ">vola-homme / Gris Polaire / 45</li>
      
    </div>
  )
}

export default ItemComment