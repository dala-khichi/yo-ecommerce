import Input from '../../Part/Utility/Input/Input'
import React, { useEffect, useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import MyAccountButton from '../../Part/MyAccount/MyAccountButton'
import Checkbox from '../../Part/Utility/Checkbox';

const AddAddressForm = () => {

  const [data, setData] = useState({
    full_name : "",
     phone_number : "", 
    alternate_phone : "" ,
     address_line1 : "",
    address_line2 : "",
    city : "",
    state  : "", pincode : "",
    address_type : ["home", "work", "other"],
    select_address_type:"",
    is_default : "",
  })


  const addAddress = () => {

    try {
      const res = Yo.post("/api/site/address", data);
      console.log(res)

    } catch (error) {
      console.error(error);
    }



  }

  const hendleOnChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  }


const handleColorChange = (color) => {
      setData({ ...data, select_address_type: color });
    }



  return (
    <div className="max-w-md ani mx-auto p-6 border rounded-md shadow-sm bg-white dark-bg">
      <h2 className="text-lg font-bold mb-4">ADD AN ADDRESS</h2>

      <form className="space-y-4 text-xl ">

       
      
        <Input label="full name" placeholder="full_nam" onChange={(e) => { hendleOnChange(e, "full_nam") }} />
        <Input label="phone_number" type='number' placeholder="phone_number" onChange={(e) => { hendleOnChange(e, "phone_number") }} />
        <Input label="alternate_phone" placeholder="alternate_phone" onChange={(e) => { hendleOnChange(e, "alternate_phone") }} />
        <Input label="address_line1" placeholder="address_line1" onChange={(e) => { hendleOnChange(e, "address_line1") }} />
        <Input label="address_line2" placeholder="address_line2" onChange={(e) => { hendleOnChange(e, "address_line2") }} />
        <Input label="city" placeholder="city" onChange={(e) => { hendleOnChange(e, "city") }} />
        <Input label="state" placeholder="address_line2" onChange={(e) => { hendleOnChange(e, "address_line2") }} />
        <Input label="pincode" type="number" placeholder="pincode" onChange={(e) => { hendleOnChange(e, "pincode") }} />



   <div className="jstart gap-2 flex-row flex">
                { data?.address_type?.map((color, i) => (
               
                   
               <Checkbox  value={data.select_address_type}   checked={data.select_address_type==color} label={color}   onChange={(e) => handleColorChange(color) } />
   ))}
            </div>



<input    type='ch'      />

        
      
       


        <div className="mt-32">
          <MyAccountButton onClick={addAddress} text="Add Address" />
        </div>




      </form>
    </div>
  );
};

export default AddAddressForm;