import React, { useEffect, useState } from 'react';
import { load } from "@cashfreepayments/cashfree-js";

import img from
'../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'
import Yo from "../../Part/Utility/Axios";
const CheckOutItemCard = () => {
  const [items, setItems] = useState([]);
 const [coupen, setCoupen] = useState("");
 const [loding, setLoding] = useState(false);
 const [err, setErr] = useState("");
 
 
 
 
 
 
 
 let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();

   
   
   const doPayment = async () => {
     
     let sessionId;
     
   
       try {
    const res =  await Yo.get("/api/site/payments");
    console.log(res.data)
    sessionId=res.data.payment_session_id;
    
    
    } catch (error) {
      console.error(error);
    }
 
     
     
        let checkoutOptions = {
            paymentSessionId: sessionId,
            redirectTarget: "_modal",
        };
      await  cashfree.checkout(checkoutOptions).then((result) => {
            if(result.error){
                // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
                console.log("User has closed the popup or there is some payment error, Check for Payment Status");
                console.log(result.error);
            }
            if(result.redirect){

                console.log("Payment will be redirected");
            }
            if(result.paymentDetails){
                // This will be called whenever the payment is completed irrespective of transaction status
                console.log("Payment has been completed, Check for Payment Status");
                console.log(result.paymentDetails.paymentMessage);
            }
        });
    };
  
 
 
 
 
 const [coupenData, setCoupenData] = useState({
   
 });
 
 const  [total,setTotal] = useState(0)
 const getItems= async ()=>{
   
       try {
    const res =  await Yo.get("/api/site/cart");
    setItems(res?.message || [] );
    } catch (error) {
      console.error(error);
    }
 }
 
 
 
 
 const applyCoupen = async (coupen)=>{
    try {
      setLoding(true)
      const res = await Yo.post("/api/site/coupons/apply",{"couponCode": coupen});
      setCoupenData(res?.message || {})
      setErr("")
      setCoupen("");
      setLoding(false)
    } catch (error) {
      setCoupenData({})
      setLoding(false)
      setErr(error.response.data.message)
      console.error(error.response.data.message);
    }
  }
 
 
 const getTotal = async()=>{
      try {
        const res =  await Yo.get("/api/site/cart/total-price");
        setTotal(res?.message?.total_price || '---')
      } catch (error) {
        console.error(error);
      }
    }
    
    
    
    
  
function getPercentageOf(discoun, total) {
    const dis=  ((discoun / 100) * total)
    const rs = total - dis;
    return rs.toFixed(2);
}


    
    
    const payment = async ()=>{
      try {
    await  doPayment()
        const res = await Yo.post("/api/site/orders",{
          couponCode:coupenData?.code,
        })
      } catch (error) {
        //console.error(error);
      }
    }
    
    
    
    
    
 
  useEffect(()=>{
getTotal()
    
    getItems()
  },[])
  
  
  
  
  
  
  
  
  
  
  return (
         <div className="flex gap-4 py-4 flex-col w-full">
{
  items?.map((element,index)=>(
          <div key={index} className="w-full flex glex-row justify-between  items-center h-20 ">

            <div className="flex glex-row gap-2 items-center h-full">
              <div className="h-full rounded-xl w-16">
                <img className="overflow-hidden rounded-xl" src={"/uploads/"+element?.img} />
            </div>

            <div className="text-xs font-normal ">
              <h3 className="text-black ">{element.item_name}</h3>
              <h4 className="text-gray-500">Vert Arctic / {element.size}/{element.quantity}</h4>
            </div>
          </div>

          <h2 className="text-sm text-black font-normal ">
            {element?.price} ₹
          </h2>


        </div>
  
  ))
}


          


{!coupenData.code &&
        <div className="jb w-full gap-2 h-12">

          <div className="flex-1 h-full">
            <input value={coupen} onChange={(e)=> {setCoupen(e.target.value)}} className="border-2  rounded-lg px-3" placeholder="enter coupon code " />
        </div>

        <div onClick={()=>applyCoupen(coupen)} className={`w-16 h-full duration-200 centre text-sm rounded-lg border-2 ${ coupen ?"border-green bg-green-900 text-white":" " }`}>
                {loding?".... ":"Apply"} 
        </div>
        
        
      </div>
      
      
}

        {err && !loding && <p className="text-red-600 ">{err}</p>}

{coupenData.code &&
<div className="bg-red-400 transition-opacity  relative w-full px-3 py-2 rounded-lg  h-1/2">

   <svg onClick={()=>setCoupenData({})} className="absolute top-2 right-2" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" width="24" height="24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg> 




Coupen apply {coupenData.code} with {coupenData.discount_percentage} discaunt 





</div>


}



      <div className="w-full flex flex-col gap-2">
        <div className="jb">
          <h2 className=""> Sous-total</h2>
          <h2 className=""> ₹{total} </h2>

        </div>
        <div className="jb">
          <h2 className=""> Expédition</h2>
          <h2 className="text-sm text-gray-500"> Saisir une adresse d’expédition</h2>

        </div>
        <div className="flex flex-row justify-between items-start  mt-4">
          <div className="">

            <h2 className="text-xl font-bold ">
              Total
            </h2>
            <h2 className="text-sm text-gray-500 font-normal ">
              Taxes de 43,00 € incluses
            </h2>
          </div>


          <h2 className="text-xl font-bold "> ₹ {coupenData.code?(getPercentageOf(coupenData.discount_percentage,total)):total}</h2>

        </div>
        
        <div onClick={payment} className="centre mt-7 rounded-lg bg-green-900 text-sm font-bold
        text-white  py-4"> 
        Payment 
        </div>

      </div>







    </div>
  )
}

export default CheckOutItemCard