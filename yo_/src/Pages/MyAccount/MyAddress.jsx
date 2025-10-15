import React, { useEffect,useState } from 'react';
import Yo from '../../Part/Utility/Axios'
import DefaultAddressCard from '../../Part/MyAccount/DefaultAddressCard'



const MyAddress = () => {
  const [data , setData] = useState([])
  
  
  const addAddress = async()=>{
    
   try {
   const res = await Yo.get("/api/site/address");
   
  setData(res.data || []);
     
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

          <svg className="inline "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>

</h2>

    {data?.map((e,i)=>(
      <DefaultAddressCard key={i} phone={e.phone||"66"} address={e.address || "add"} pincode={e.pincode || "123029"} city={e.city||"jhook"} state={e.state||"hariyana"} />
      ))}

    </div>
  )
}

export default MyAddress