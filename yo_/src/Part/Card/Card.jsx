import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Navigate } from 'react-router-dom';
import { useUtility } from '../../Context/UtilityContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import CardItem from './CardItem';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import Yo from "../../Part/Utility/Axios";



const Card = forwardRef(({ className,triggerCard, cardFunX,cardBtnRef},ref) => {
  const { isPhone ,yoData} = useUtility();
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [swiperKey, setSwiperKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);
  const cardItemRefs = useRef([]);
const  [total,setTotal] = useState(0)
//const navigater = Navigate();






const cardV1 = {
  isOpen: false,

  open() {
    this.isOpen = true;
    gsap.to(cardRef.current, {
      x: 0,
      display: "flex",
      duration: 1,
      ease: "power4.inOut"
    });
  },

  close() {
    this.isOpen = false;
    gsap.to(cardRef.current, {
      display: "none",
      x: "100vw",
      duration: 1,
      ease: "power4.inOut"
    });
  },

  trigger() {
    this.isOpen ? this.close() : this.open();
  }
};



useEffect(()=>{
  cardFunX(cardV1)
},[])




const getTotal = async()=>{
      try {
        const res =  await Yo.get("/api/site/cart/total-price");
        
        setTotal(res?.message?.total_price || '---')
      } catch (error) {
        console.error(error);
      }
    }
 
 
  
  useEffect(()=>{
  getTotal()
  },[,yoData?.cart])












  const handleDeleteItem = (index) => (event) => {
    event.stopPropagation();
    if (isAnimating) return;
    
    setIsAnimating(true);
    const targetRef = cardItemRefs.current[index];

    gsap.to(targetRef?.current, {
      x: "100vw",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        setSlides((prev) => {
          const newSlides = prev.filter((_, i) => i !== index);
          return newSlides;
        });
        
        // Force Swiper to completely reset
        setSwiperKey(prev => prev + 1);
        setIsAnimating(false);
      }
    });
  };

  useImperativeHandle(ref, () => ({
    openCard: () => {
      gsap.to(cardRef.current, {
        x: 0,
        display: "flex",
        duration: 1,
        ease: "power4.inOut"
      });
    },
    closeCard: () => {
      gsap.to(cardRef.current, {
        display: "none",
        x: "100vw",
        duration: 1,
        ease: "power4.inOut"
      });
    },
  }));
  
  cardRef.closeCard= () => {
      gsap.to(cardRef.current, {
        display: "none",
        x: "100vw",
        duration: 1,
        ease: "power4.inOut"
      });
      
    }
  

  useEffect(() => {
    // Initialize refs array
    cardItemRefs.current = slides.map((_, i) => cardItemRefs.current[i] ?? React.createRef());
  }, [slides]);
  useEffect(() => {
    setSlides(yoData?.cart||[])
   
  }, [yoData]);

  return (
    <div
      ref={cardRef}
      style={{ display: "none" }}
      className={`translate-x-[100vw] border-t-2 fixed z-30 bg-white w-screen h-[calc(100dvh-5rem)] flex flex-col ${className}`}
    >
      <CardHeader />
      
      <Swiper
        key={swiperKey}
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        direction="vertical"
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1.13}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4.1 },
          1024: { slidesPerView: 4 }
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        className="w-full flex-1 h-[calc(100vh-5rem-18.5vw)] overflow-hidden"
      >
        {slides?.map((element, index) => (
          <SwiperSlide 
            ref={el => cardItemRefs.current[index] = { current: el }}
            key={`${element}-${index}`}
            style={{ transition: "all 0.8s ease" }}
          >
            <CardItem updateTotal={getTotal} cartItemData={element}  onClick={handleDeleteItem(index)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CardFooter  total={total} order={()=>{triggerCard();  }} />
    </div>
  );
});

export default Card;