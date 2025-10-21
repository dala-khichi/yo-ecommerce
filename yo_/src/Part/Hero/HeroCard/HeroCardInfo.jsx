import React,{useState}from 'react'

const HeroCardInfo = ({className,name,category,price}) => {
  
const [info , setInfo] = useState({
  name:"VALA VERT-ARCTIC",
  category:"Recycled wool",
  price:"129.00 €"
})


  return (
     <div  className={`w-full flex flex-col p-3 ${className}`}>
          <h1 className="font-semibold">{name}</h1>
          <h3 className="text-sm  text-gray-300">{category}</h3>
          <h2 className="font-semibold">{price}</h2>
        </div>
  )
}

export default HeroCardInfo