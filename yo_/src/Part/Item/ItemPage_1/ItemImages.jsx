import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






// import img from
// '../../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'
const ItemImages = ({imgs}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
    //  onSwiper={(swiper) => console.log(swiper)}
      
    className="w-screen h-[100vw] centre flex- bg-gray-100">
    
    {imgs?.map((img,index)=>(
      
      <SwiperSlide key={index} className="w-full h-full">
        <img className="object-contain" src={"/uploads/"+img} art={img} />
      </SwiperSlide>
      
      
      ))}
    
  
      
      
      
    </Swiper>
  )
}

export default ItemImages