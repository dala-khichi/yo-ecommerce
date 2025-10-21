import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";

import {useUtility} from '../../Context/UtilityContext'




const SubMenu = forwardRef(({
  className,onClick,closeButton ,
}, ref) => {
    const  {yoData,getYoData} = useUtility()
  const subMenuRef = useRef(null);
  
   
  
  
  

  useImperativeHandle(ref, () => ({
    openSubMenu: (id) => {
      getYoData("sub_categories","/api/site/sub-categories/"+id,{})
      gsap.to(subMenuRef.current, {
        //opacity: 1, 
        x: 1, 
     //   scale:1,
        display: "flex", 
        duration: 0.5, 
        ease: "power4.inOut"
      });
    },
    closeSubMenu: () => {
      gsap.to(subMenuRef.current, {
      //  opacity: 0, 
        display: "none",
        x: "100vw",
     //   scale:0,
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
    }));

  return (
    <>
     
    <div
      ref={subMenuRef} onClick={onClick} style={{display:"none",}}
      className={`px-11 full absolute top-0 left-0  border-t-2 scale-1
      z-[60] translate-x-[100vw]  bg-white py-14 w-screen1
      h-[calc(100vh-5rem)]1
      flex flex-col gap-9 ${className}`}
      >
      <div className="flex jb" >
            <div onClick={closeButton} className="scale-[1.2] p-2 rounded-full  rotate-180">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      
      
      <h1  className="text-2xl font-light text-center">WOMEN</h1>
      </div>
      
      {yoData?.sub_categories?.map((element,index)=>(
      <ManuItems key={index} text={element.name} />
      
      ))}
      
{  /*    <ManuItems text="WOMEN" />
      <ManuItems text="MEN" />
      <ManuItems text="KIDS" />
     */ }
      
    </div>
  </>
);
});

export default SubMenu;