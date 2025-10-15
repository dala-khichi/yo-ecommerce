import Input from '../../Part/Utility/Input/Input'
import React, { useEffect,useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import MyAccountButton  from '../../Part/MyAccount/MyAccountButton'

const AddAddressForm = () => {
  
  const [data , setData] = useState({
    state:"",
    city:"",
    pincode:"",
    address :"",
  })
  
  
  const addAddress = ()=>{
    
   try {
   const res= Yo.post("/api/site/address",data);
   console.log(res)
     
   } catch (error) {
     console.error(error);
   }
    
    
    
  }
  
  const hendleOnChange=(e,name)=>{
  setData({...data,[name]: e.target.value});
}
  
  
  
  
  
  
  return (
    <div className="max-w-md ani mx-auto p-6 border rounded-md shadow-sm bg-white dark-bg">
      <h2 className="text-lg font-bold mb-4">ADD AN ADDRESS</h2>

      <form className="space-y-4 text-xl ">
      <Input  label="state" placeholder="state" onChange={(e)=>{hendleOnChange(e,"state")}} />
      <Input label="city" placeholder="city" onChange={(e)=>{hendleOnChange(e,"city")}}  />
      <Input label="pincode"  placeholder="pincode" onChange={(e)=>{hendleOnChange(e,"pincode")}}  />
      <Input label="address" placeholder="address" onChange={(e)=>{hendleOnChange(e,"address")}}  />
      <Input label="address" placeholder="address" onChange={(e)=>{hendleOnChange(e,"address")}}  />
      <textarea label="address" placeholder="address" onChange={(e)=>{hendleOnChange(e,"address")}}  />
      
      
      <div className="mt-32">
      <MyAccountButton onClick={addAddress}  text="Add Address" />
      </div>




      </form>
    </div>
  );
};

export default AddAddressForm;