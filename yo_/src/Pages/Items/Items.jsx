import React from 'react'
import ItemsItem from '../../Part/Items/ItemsItem'
import img from '../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'
import img1 from '../../Image/639d56af84d8d43fbc73f642_product-03.jpg'
import img2 from '../../Image/Items/DSC09648_8895a057-1ca8-4385-9b43-7241a83fbec1.png'
import Input from '../../Part/Utility/Input/Input'
import { useEffect, useState } from 'react';
import {useUtility} from "../../Context/UtilityContext"
import Yo from "../../Part/Utility/Axios"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode,Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; //Card.jsx


const Items = () => {
  const {setNavConf} = useUtility()
    const [itemData, setItemData] = useState([]);

  
  
  useEffect(() => {
    window.scrollTo(0, 0);
   // setNavConf((pre)=>({...pre,position:"relative"}))
  }, []);
  useEffect(() => {
    const getItems = async ()=>{
            try {
    // const res = await Yo.get('../../src/TestData/Trending.json');
     const res = await Yo.get('/api/site/items/');
   //  console.log(res.message);
     setItemData(res.message)
    } catch (error) {
      console.log(error);
    }
    }
    
    getItems()
  }, []);
  
  
  
  
  
  
  
  
  
  
  
  return (
    <>
    
    
    <div className="page bg-white  pt-20">
    
    <div className="w-full h-[3.5rem] py-10 font-bold centre">
    <h1 className="text-2xl"> ALL ITEMS</h1>
    </div>
    <div className="jb flex flex-row px-5"> 
    <div className="text-sm font-bold"> FILTER AND SORT  </div>
    <div className="text-sm"> {itemData.length} product </div>
    </div>
    
    
       <div  className="w-full px-5 h-20 relative z-20 bg-pink-300 bg-white ">
    <Input label="Search Items " placeholder="search item" />
    </div> 
    
       <div  className="w-full px-5 h-20 relative z-20 bg-pink-300 bg-white ">
      
          </div> 
    
    
    
    
    
    <div className="page   columns-2 ani_1   md:columns-4 bg-white gap-1.5 ">
            {
       itemData?.map((element,index)=>(
       
     <ItemsItem key={index} to={"/item/"+element.id} img={"/uploads/"+element.image.img} name={element.name} category={element.category_name} price={element.id}  />

        ))
      }
     
      
    </div>
      
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    


      
    
{/*<Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
  direction="vertical"
  spaceBetween={2}
  slidesPerView={10}
  navigation
  freeMode
  className="h-[600px] bg-white"
>
  {[12, 4, 6, 12, 4, 6, 12, 4, 6, 12, 4, 6].map((element, index) => (
    <SwiperSlide key={index}>
      <ItemsItem img={img} />
    </SwiperSlide>
  ))}
</Swiper>
*/}
    </>
  )
}

export default Items