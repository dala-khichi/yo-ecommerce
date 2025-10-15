import React, { useRef, forwardRef } from "react";
import gsap from "gsap";
import Yo from "../Utility/Axios";
import {useUtility} from "../../Context/UtilityContext"



const CardItem = forwardRef(({ className, updateTotal,onClick,cartItemData }, ref) => {
  const deleteButtonRef = useRef(null);
    const {yoData, getYoData,} = useUtility()









  const handleButton = (event) => {
    event.stopPropagation();
    gsap.to(deleteButtonRef.current, {
      width: "40vw",
      duration: 0.5,
      ease: "power4.inOut",
    });
  };

  const closeDeleteButton = (event) => {
    event.stopPropagation();
    gsap.to(deleteButtonRef.current, {
      width: "0vw",
      duration: 0.5,
      ease: "power4.inOut",
    });
  };


const updateQty = async (id,qty)=>{
  if(qty>=1){
  try {
  const res = Yo.patch(`/api/site/cart/updateQty/${id}`,{"updateQty":qty})
  getYoData("cart","/api/site/cart")
  } catch (error) {
    console.error(error);
  }
  }
}


const deleteCartItem = async (e,id)=>{
  try {
  const res =    await Yo.delete(`/api/site/cart/${id}`)
  onClick(e)
  updateTotal();
  } catch (error) {
    console.error(error);
  }
}



  return (
    <div onClick={closeDeleteButton} className="w-full">
      <div className="flex w-full border-y h-56 flex-row">
        <div className="w-[45%] h-full">
          <img src={"/uploads/"+cartItemData?.img} alt="Product" className="w-full h-full object-cover"/>
        </div>

        <div className="flex-1 flex flex-col gap-4 h-full p-4">
          <div>
            <h1 className="text-3xl whitespace-nowrap font-medium">{cartItemData.item_name}</h1>
            <div className="text-xs leading-tight px-1">
              <h4 className="flex items-center gap-2">
                <div className="bg-green-700 rounded-full w-3 h-3"></div>
                {cartItemData.item_name}
              </h4>
              <h4 className="flex items-center gap-2">
                <div className="rounded-full w-3 h-3"></div>
                Size : {cartItemData?.size}
              </h4>
            </div>
          </div>

          <div className="flex items-center text-sm h-10 w-full">
            <div onClick={()=>updateQty(cartItemData.id,Number(cartItemData.quantity)-1)} className="flex items-center justify-center w-10 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <div className="flex items-center justify-center border border-gray-200 w-10 h-full">
              {cartItemData?.quantity}
            </div>
            <div onClick={()=>updateQty(cartItemData.id,Number(cartItemData.quantity)+1)}  className="flex items-center justify-center w-10 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-light">{cartItemData.price}€</h1>
        </div>
      </div>

      <div onClick={handleButton} className="w-full flex flex-row items-center justify-center h-16">
        <button className="w-full font-medium text-black">DELETE</button>
        <div 
          ref={deleteButtonRef} 
          onClick={(e)=>deleteCartItem(e,cartItemData.id) }
          className="h-full w-[0vw] flex items-center justify-center bg-black cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
});

export default CardItem;