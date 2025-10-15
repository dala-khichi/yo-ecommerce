import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { useUtility } from "../../../Context/UtilityContext";
import HeroCard from "./HeroCard";
import React from 'react';

const HeroCardSwiper = ({ spaceBetween, slidesPerView, imgClassName, infoClassName, data, isLoading }) => {
  const { isPhone } = useUtility();

  // Skeleton loading component
  const SkeletonCard = () => (
    <div className="animate-pulse bg-gray-200 rounded-lg# overflow-hidden">
      <div className={`bg-gray-300 ${imgClassName || 'h-48'}`}></div>
      <div className="p-3">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );

  if (isLoading || !data) {
    return (
      <div className="w-full gap-4 flex overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `calc(100%/${slidesPerView || 1.2} - ${spaceBetween || 10}px)` }}>
            <SkeletonCard />
          </div>
        ))}
      </div>
    );
  }

  // if (data?.length === 0) {
//     return (
//       <div className="w-full text-center py-10 text-gray-500">
//         No items found
//       </div>
//     );
//   }

  return (
    <Swiper
      modules={[Navigation, FreeMode, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={!isPhone?.isPhone}
      freeMode={true}
      pagination={!isPhone.isPhone}
     // onSwiper={(swiper) => console.log(swiper)}
      className="w-full gap-4 flex overflow-scroll"
    >
      {data?.map((element, index) => (
        <SwiperSlide key={index}>
          <HeroCard
            imgClassName={imgClassName}
            infoClassName={infoClassName}
            name={element?.item_name}
            category={element.category_name}
            price={element.price}
            img={element.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCardSwiper;