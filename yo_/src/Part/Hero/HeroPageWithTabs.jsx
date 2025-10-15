import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import HeroCardSwiper from "../../Part/Hero/HeroCard/HeroCardSwiper";
import { useUtility } from "../../Context/UtilityContext";

const HeroPageWithTabs = ({
  option1,
  option2,
  data,
  activeTab,
  onClick1,
  onClick2,
  imgClassName = "",
  infoClassName = "",
  spaceBetween = 10,
  slidesPerView = 1.2,
  isLoading
}) => {
  const { isPhone } = useUtility();
  
  // Determine if this is a switchable tabs component
  const hasTabs = onClick1 && onClick2;
  
  return (
    <div className={`w-screen ${hasTabs ? 'mb-12' : ''} centre flex-col gap-3 default_padding`}>
      {hasTabs && (
        <div className="flex text-xl flex-row overflow-scroll w-full">
          <button 
            onClick={onClick1} 
            className={`py-4 border-b-2 centre min-w-[50%] w-1/2 ${
              activeTab === 'best_seller' 
                ? 'text-black border-black dark:text-gray-100' 
                : 'text-gray-400 border-gray-400'
            }`}
          >
            {option1}
          </button>
          <button 
            onClick={onClick2} 
            className={`py-4 border-b-2 centre min-w-[50%] w-1/2 ${
              activeTab === 'most_recent' 
                ? 'text-black border-black dark:text-gray-100' 
                : 'text-gray-400 border-gray-400'
            }`}
          >
            {option2}
          </button>
        </div>
      )}
      
      {!hasTabs && (
        <div className="w-full text-left">
          <h2 className="text-xl font-semibold py-4 dark:text-white">{option1}</h2>
        </div>
      )}
      
      <HeroCardSwiper 
        data={data} 
        imgClassName={imgClassName} 
        infoClassName={infoClassName} 
        spaceBetween={spaceBetween} 
        slidesPerView={slidesPerView} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default HeroPageWithTabs;