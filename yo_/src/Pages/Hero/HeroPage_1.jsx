import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from '../../Image/639d56af84d8d43fbc73f642_product-03.jpg';
import Yo from '../../Part/Utility/Axios';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useUtility} from '../../Context/UtilityContext'





gsap.registerPlugin(ScrollTrigger);

const HeroPage_1 = () => {
  const  {yoData} = useUtility()
  const poster = useRef(null);
  const [posterData, setPosterData] = useState([]);



  useEffect(() => {
  // console.log(yoData.postersX);
    
  if (!posterData.length) return;




    gsap.from('.poster', {
      duration: 1,
      ease: 'power3.out',
      y: 100,
    });
  }, [yoData.postersX]);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      /*onSwiper={(swiper) => console.log('swip')} */
        className="w-screen h-full centre flex- bg-gray-100"
      >
        {yoData?.postersX?.map((element, index) => (
          <SwiperSlide key={index} className="w-full relative h-full">
            <div className=" poster  fixed  top-40 rotate-90 -left-3 text-black z-40">
              <h2 className="text-xl font-medium">{element?.heading}ULTRA WATERPROOF </h2>
              <h1 className="text-2xl font-bold">{element?.title}AXOLO R-SKIN©</h1>
            </div>
            <img className="object-cover" src={"/uploads/"+element.img} alt={`poster-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPage_1;