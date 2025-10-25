import React, { useEffect,useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import DefaultAddressCard from '../../Part/MyAccount/DefaultAddressCard'
import Checkbox from '../../Part/Utility/Checkbox'
import { useUtility } from "../../Context/UtilityContext";

import {
  Link,
  Outlet
} from "react-router-dom";


const MyAddress = () => {
  const [data , setData] = useState([])
  const [selectedAddress , setSelectedAddress] = useState(0)
  
      const { selectedAddressId, setSelectedAddressId } = useUtility();

  
  const getAddress = async()=>{
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
   
   
   if(selectedAddressId == id ){
     setSelectedAddressId(0)
   }
   
   
   getAddress()
   } catch (error) {
     console.error(error);
   }
  }
  useEffect(()=>{
    getAddress()
    
  },[])
  
  
  
  
  
  
  
  const setAddress=(id)=>{
    
    setSelectedAddressId(id || 0)
    const selectedId= JSON.stringify(id||0);
     localStorage.setItem("selectedAddressId",selectedId);
  }
  
  
  
  
  
  
  
  
  
  return (
    <div className="ani flex flex-col md:flex-row md:flex-wrap  gap-10 py-4 ">
          <h2 className="text-xl font-semibold   text-center">My Address 
<Link to="/account/add-address">
          <svg   className="inline "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>
</Link>
</h2>

    {data?.map((e,i)=>(
  <div key={i} className="relative  pointer-events-none" >
  
                          
                            <input 
                                 value={selectedAddressId}
                                checked={selectedAddressId==e.id}
                               onChange={()=>setAddress(e.id)}
                                 type="checkbox" 
                                className="absolute  opacity-1 pointer-events-auto  z-0 w-full h-full bg-amber-400 peer  " 
                            />
                            
      <DefaultAddressCard className={selectedAddressId==e.id?'bg-gray-100':'bg-white' } key={i} delectOnClick={() => delectAddress(e.id)} id={e.id} address_type={e.address_type} phone={e.phone_number||"66"} address={e.address_line1 || "add"} pincode={e.pincode || "123029"} city={e.city||"jhook"} state={e.state||"hariyana"} />
      
      

      
      
      
      
      
</div>

      ))}

    </div>
  )
}

export default MyAddress