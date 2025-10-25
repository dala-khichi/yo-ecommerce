import { createContext, useContext, useState, useEffect } from "react";
import Yo from '../Part/Utility/Axios';

const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [isPhone, setIsPhone] = useState({
    isPhone: null,
    width: null,
    height: null,
  });
  const [categoryData, setCategoryData] = useState([]);
 const [selectedAddressId, setSelectedAddressId] = useState(0);

  const [subCategoryData, setSubCategoryData] = useState([]);
  
  const [yoData, setYoData] = useState({});
  const [navConf, setNavConf] = useState({
    position: 'fixed',
    zIndex: 50,
  });
  
  
  
  
  
  
  useEffect(()=>{
    const getSubCategoryData = async ()=>{
      try {
       const res = await Yo.get('/api/site/sub-categories/')
        setSubCategoryData(res?.data ||[]);
      } catch (error) {
        alert("sub cat err")
      }
    }
    getSubCategoryData()
  },[])
  
    const getYoData = async (key,url,storeDataIn=[])=>{
      try {
       const res = await Yo.get(url)
        setYoData((pre)=>({...pre,[key]:res?.message||storeDataIn}));
        
      } catch (error) {
        alert("getYoData")
      }
    }
    
    
    
    
    
    
    useEffect(()=>{

   setSelectedAddressId(localStorage.getItem("selectedAddressId") || 0)
  },[])
    
    
    
    
    
    
    
  useEffect(()=>{
   //getYoData("categories","/api/site/categories/")
    getYoData("postersX","/api/site/posters/")
    getYoData("tranding","../../src/TestData/Trending.json")
    getYoData("deluxe","../../src/TestData/Trending.json")
    getYoData("best_seller","../../src/TestData/Trending.json")
    getYoData("most_recent","../../src/TestData/Trending.json")
    
    
  },[])
  
  

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsPhone({
        isPhone: width <= 600,
        width,
        height,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call immediately to set initial values


      

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UtilityContext.Provider value={{ 
    isPhone , 
    subCategoryData,
    yoData,
    getYoData,
    navConf, 
    setNavConf,
      selectedAddressId,
      setSelectedAddressId
    }}>
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtility = () => useContext(UtilityContext);