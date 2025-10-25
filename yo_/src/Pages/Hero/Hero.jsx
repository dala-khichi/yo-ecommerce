import React, { useEffect, useState } from 'react';
import HeroPage_1 from './HeroPage_1.jsx';
import HeroPageWithTabs from '../../Part/Hero/HeroPageWithTabs.jsx';
import HeroPage_3 from './HeroPage_3.jsx';
import { useUtility } from "../../Context/UtilityContext";

const Hero = () => {
  const { isPhone, yoData, getYoData } = useUtility();
  const [displayData, setDisplayData] = useState([]);
  const [activeTab1, setActiveTab1] = useState('trending');
  const [activeTab2, setActiveTab2] = useState('best_seller');
  const [loading, setLoading] = useState({
    loading_x: true,
    loading_trending: true,
    loading_best_seller: true,
  });

  // Initial load
  useEffect(() => {
    fetchBestSeller();
    fetchTrending()
  }, []);

  const fetchTrending = async () => {
    setActiveTab2('trending');
    try {
      if (!yoData?.trending) {
        setLoading(pre => ({...pre, loading_trending: true}));
        await getYoData("trending", "../src/TestData/Trending.json");
        setLoading(pre => ({...pre, loading_trending: false}));
      }
      setDisplayData(yoData?.trending || []);
    } catch (error) {
      console.error("Error loading best sellers:", error);
    }
  };
  
  const fetchBestSeller = async () => {
    setActiveTab2('best_seller');
    try {
      if (!yoData?.best_seller) {
        setLoading(pre => ({...pre, loading_x: true}));
        await getYoData("best_seller", "../src/TestData/Trending.json");
        setLoading(pre => ({...pre, loading_x: false}));
      }
      setDisplayData(yoData?.best_seller || []);
    } catch (error) {
      console.error("Error loading best sellers:", error);
    }
  };

  const fetchMostRecent = async () => {
    setActiveTab2('most_recent');
    try {
      if (!yoData?.most_recent) {
        setLoading(pre => ({...pre, loading_x: true}));
        await getYoData("most_recent", "../src/TestData/Trending.json");
        setLoading(pre => ({...pre, loading_x: false}));
      }
      setDisplayData(yoData?.most_recent || []);
    } catch (error) {
      console.error("Error loading most recent:", error);
    }
  };

  // Update display data when yoData changes
  useEffect(() => {
    
    if (activeTab2 === 'best_seller' && yoData?.best_seller) {
      setDisplayData(yoData.best_seller);
    } else if (activeTab2 === 'most_recent' && yoData?.most_recent) {
      setDisplayData(yoData.most_recent);
    }
  }, [yoData, activeTab2]);
  useEffect(() => {
    yoData.tranding? setLoading(pre => ({...pre, loading_trending: false})): setLoading(pre => ({...pre, loading_trending: true}));
    yoData.best_seller? setLoading(pre => ({...pre, loading_x: false})): setLoading(pre => ({...pre, loading_x: true}));


    
    
    
    
  }, [yoData]);

  return (
    <div className="font-[Inter] dark:bg-gray-900 bg-white relative z-[10]">
      <HeroPage_1 />
      <HeroPageWithTabs 
        data={yoData?.tranding} 
        option1="Trending" 
        option2="Coming Soon" 
        spaceBetween={10} 
        slidesPerView={isPhone?.isPhone?1.2:4.5}
        isLoading={loading.loading_trending}
      />
      <HeroPageWithTabs 
        data={displayData} 
        option1="Best Seller" 
        option2="Most Recent" 
        onClick1={fetchBestSeller} 
        onClick2={fetchMostRecent}
        activeTab={activeTab2}
        imgClassName="!h-[35.1vh]" 
        infoClassName="text-sm" 
        spaceBetween={10} 
         slidesPerView={ isPhone.isPhone?2.2:6.5}
        isLoading={loading.loading_x}
      />
      <HeroPageWithTabs 
        data={yoData?.deluxe} 
        option1="Deluxe" 
        option2="Coming Soon" 
        imgClassName="!h-[35.1vh]" 
        infoClassName="text-sm" 
        spaceBetween={10} 
         slidesPerView={ isPhone.isPhone?2.2:6.5}
        isLoading={false}
      />
      <HeroPage_3 />
    </div>
  );
};

export default Hero;