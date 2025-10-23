import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet
} from "react-router-dom";

import CheckOutInput from '../../Part/CheckOut/CheckOutInput'
import CheckOutItemCard from '../../Part/CheckOut/CheckOutItemCard'
import CheckOutSectionLayout from '../../Layout/CheckOutSectionLayout'
import AddAddressForm from '../../Pages/MyAccount/AddAddressForm'
import MyAddress from '../../Pages/MyAccount/MyAddress'
import DefaultAddressCard from '../../Part/MyAccount/DefaultAddressCard'

import { useUtility } from "../../Context/UtilityContext";

import img from
'../.../../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'

import Yo from "../../Part/Utility/Axios";
import Checkbox from '../../Part/Utility/Checkbox';



const CheckOut = () => {
    const [checkOutDarta, setCheckOutDarta] = useState({});
    const [address, setAddress] = useState(false);
    const [coupen, setCoupen] = useState(null);
    const [selectAddress, setSelectAddress] = useState({});
    const { selectedAddressId, setSelectedAddressId } = useUtility();
    const [payment, setPayment] = useState(['upi',"cod"]);
    const [paymentSelected, setPaymentSelected] = useState("");


    
   
   
   
   
   
  const createOrder = async ()=>{
    try {
    const res = await Yo.post("/api/site/orders")
      console.log("createOrder",res);
    } catch (error) {
      console.error(error);
    }
    
    
  }
  
  
  
  
  useEffect(()=>{
  const getAddressById = async (id)=>{
    try {
    const res = await Yo.get("/api/site/address/"+id)
    
    setSelectAddress(res?.data||{})
      
    } catch (error) {
      console.error(error);
    }
    
    
  }
  
    getAddressById(selectedAddressId)
    
  },[selectedAddressId])
  
  
  
  
  
  const applyCoupen = async ()=>{
    try {
      const res = Yo("/api/site/applyCoupen",);
    } catch (error) {
      console.error(error);
    }
  
  }
  
  
  
  
  
  
  
  const handlePaymentOption = (option) => {
      setPaymentSelected(option);
    }

  
  
  
  
  
  
  const hendleChange=(e,name)=>{
  setCheckOutDarta({...checkOutDarta,[name]: e.target.value})
  }
  
  
  return (
    <div className="page  dark-bg bg-white py-20  ">
    
    
    
    
      <div className="flex default_padding justify-between items-center
        bg-gray-100 border-y h-16 dark:dbg ">
        <h3 className="text-green-900 text-sm">Résumé de la commande </h3>
        <h2 className="text-green-900 text-lg font-semibold ">258,00 €</h2>

      </div>

      <div className="default_padding flex flex-col gap-8 py-8  w-full">



        <CheckOutSectionLayout heading="Contact" subHeading="Ouvrir une session">
          <CheckOutInput onChange={(e)=>{hendleChange(e,"phone")}} value={checkOutDarta.phone} placeholder="" />

          <div className=" w-full  gap-1 centre flex">
            <input type="checkbox" />
          <h2 className="min-w-full  text-xs">

            Envoyez-moi les nouvelles et les offres par email et Whatsapp
          </h2>
        </div>



      </CheckOutSectionLayout>

     
      
    <CheckOutSectionLayout heading="Livraison" subHeading="add Address">
{selectedAddressId?  <DefaultAddressCard   id={selectAddress.id} address_type={selectAddress.address_type} phone={selectAddress.phone_number||"66"} address={selectAddress.address_line1 || "add"} pincode={selectAddress.pincode || "123029"} city={selectAddress.city||"jhook"} state={selectAddress.state||"hariyana"} /> :

<Link to="/account/add-address">
<div className="border w-full  bg-gray-200 px-3 py-3 mt-2 ">


          <h2 className="text-sm font-semibold   text-center"> Create Address 
          <svg   className="inline "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>
</h2>
</div>
</Link>
}
      </CheckOutSectionLayout>
      
      
      
      <CheckOutSectionLayout heading="Livraison" subHeading="">

        <div className="w-full mt-2 font-normal text-gray-500 centre text-sm  py-4 border  px-3 bg-gray-200 ">
          <h3>Saisissez votre adresse d’expédition pour voir les modes d’expédition disponibles.</h3>
        </div>

      </CheckOutSectionLayout>



      <CheckOutSectionLayout heading="Paiement" subHeading="jjjjjjjj">
      <>
      <div className='jstart gap-2 py-3 flex-row flex'>

            {payment?.map((option,i)=>(
              
              
              <Checkbox 
              key={i}
              checked={paymentSelected==option} 
              label={option} 
              value={paymentSelected} 
              onChange={(e) => handlePaymentOption(option) } 
              //   
              />
              
            ))}

            </div>
        
        </>
      </CheckOutSectionLayout>
      
      
      
      
      
      <CheckOutSectionLayout heading="Résumé de la commande" subHeading="">
        <CheckOutItemCard paymentType={paymentSelected} />
  </CheckOutSectionLayout>






</div>





</div>
)
}

export default CheckOut