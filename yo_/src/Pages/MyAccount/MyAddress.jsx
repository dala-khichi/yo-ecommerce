import React, { useEffect,useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import DefaultAddressCard from '../../Part/MyAccount/DefaultAddressCard'

import {
  Link,
  Outlet
} from "react-router-dom";


const MyAddress = () => {
  const [data , setData] = useState([])
  const [selectedAddress , setSelectedAddress] = useState(0)
  
  
  const addAddress = async()=>{
    
   try {
   const res = await Yo.get("/api/site/address");
   
  setData(res.data || []);
     
   } catch (error) {
     console.error(error);
   }
    
    
    
  }
  const delectAddress = async(id)=>{
   try {
   const res = await Yo.delete("/api/site/address/"+id);
   addAddress()
   } catch (error) {
     console.error(error);
   }
  }
  useEffect(()=>{
    addAddress()
    
  },[])
  
  
  
  
  
  return (
    <div className="ani flex flex-col md:flex-row md:flex-wrap  gap-10 py-4 ">
          <h2 className="text-xl font-semibold   text-center">My Address 
<Link to="/account/add-address">
          <svg   className="inline "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>
</Link>
</h2>

    {data?.map((e,i)=>(
      <div className="border-2 border-gray-950 rounded-md">
      <DefaultAddressCard key={i} delectOnClick={() => delectAddress(e.id)} id={e.id} address_type={e.address_type} phone={e.phone_number||"66"} address={e.address_line1 || "add"} pincode={e.pincode || "123029"} city={e.city||"jhook"} state={e.state||"hariyana"} />
      </div>
      ))}

    </div>
  )
}

export default MyAddress