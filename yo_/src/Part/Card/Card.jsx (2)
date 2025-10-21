import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import gsap from "gsap";
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

const Card = forwardRef(({ className }, ref) => {
  const { isPhone } = useUtility();
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([1, 2, 3, 4, 5]);
  const cardRef = useRef(null);
  const cardItemRefs = useRef([]);

  const handleDeleteItem = (index) => (event) => {
    event.stopPropagation();
    const targetRef = cardItemRefs.current[index];

    // Immediately prepare for deletion
    gsap.set(targetRef.current, {
      overflow: "hidden",
      margin: 0,
      padding: 0
    });

    // Animate out
    gsap.to(targetRef.current, {
      x: "100vw",
      height: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        setSlides((prev) => prev.filter((_, i) => i !== index));
        if (swiperRef.current) {
          swiperRef.current.update();
          swiperRef.current.slideTo(0);
        }
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

  useEffect(() => {
    cardItemRefs.current = slides.map((_, i) => cardItemRefs.current[i] ?? React.createRef());
  }, [slides]);

  return (
    <div
      ref={cardRef}
      style={{ display: "none" }}
      className={`translate-x-[100vw] border-t-2 fixed z-30 bg-white w-screen h-[calc(100vh-5rem)] flex flex-col ${className}`}
    >
      <CardHeader />
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        direction="vertical"
        spaceBetween={0}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        {slides.map((element, index) => (
          <SwiperSlide 
            ref={cardItemRefs.current[index]} 
            key={index}
            style={{ transition: "all 0.8s ease" }}
          >
            <CardItem onClick={handleDeleteItem(index)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CardFooter />
    </div>
  );
});

export default Card;