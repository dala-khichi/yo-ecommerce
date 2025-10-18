import React, { useRef,forwardRef,useImperativeHandle, useState,useEffect } from "react";
import {useUtility} from "../../Context/UtilityContext"
import {useAuth} from "../../Context/AuthContext"


import {
  Link,
  Outlet
} from "react-router-dom";




import Menu from "./Menu";
import Card from "../Card/Card";


import gsap from "gsap";

const Nav = forwardRef(({
  className
}, ref) => {
  
  const {navConf} = useUtility()
  const {yoData, getYoData,} = useUtility()
  const {login,user} = useAuth()
  
  
  
  const menuRef = useRef(null);
  const cardRef = useRef(null);
  const cardBtnRef = useRef(null);
  

  
  
  
  const menuButtonRef = useRef(null);
  const menuButtonSvgRef = useRef(null);
  const navBgRef = useRef(null);
  const navBg2Ref = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenNavManuBtn, setIsOpenNavManuBtn] = useState(false);
  const [isOpenNavCardBtn, setIsOpenNavCardBtn] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [isOpenNavBg, setIsOpenNavBg] = useState(false);
  
  
  
  const [cardX, setCardX] = useState({});
  const [menuX, setMenuX] = useState({});


const getCart = ()=>{
      getYoData("cart","/api/site/cart")
}




const navBg = {
  
  open: ()=>{

    gsap.to(navBgRef.current, {
      height: "5rem",
      duration: 1,
        ease: "power4.inOut"
    },)
},
  close: ()=>{

    
      gsap.to(navBgRef.current, {
      height: "0",
     duration: 1,
        ease: "power4.inOut"
    },)
  },
  
  trigger : ()=>{
    if(isOpenNavBg){
      navBg.close()
    }else{
     navBg.open()
    }
         setIsOpenNavBg(!isOpenNavBg)
  }
  
}
const navCardBtn = {
  
  open : ()=>{
    
    gsap.to(".cardIcon",{
        backgroundColor: 'black',
    duration: 0.5,
    ease: "power4.out"
        
      })
     gsap.to(".cardIconSvg",{
        stroke: 'white',
        scale:1.6,
    duration: 0.5,
    ease: "power4.out"
        
      }) 
  },
  close : ()=>{
    
    
    gsap.to(".cardIcon",{
        backgroundColor: 'transparent',
    duration: 0.5,
    ease: "power4.out"
        
      })
    gsap.to(".cardIconSvg",{
        stroke: 'black',
        scale:1,
    duration: 0.5,
    ease: "power4.out"
        
      })
  },
  trigger : ()=>{
    
    if(isOpenNavCardBtn){
      navCardBtn.close()
    }else{
      navCardBtn.open()
    }
   setIsOpenNavCardBtn(!isOpenNavCardBtn)
    
  }
}
const navManuBtn = {
  
  close : ()=>{
    
    animateToHamburger()
  },
  open : ()=>{
    
    animateToCross("elastic")
  },
  trigger : ()=>{
    if(isOpenNavManuBtn){
      navManuBtn.close()
    }else{
      navManuBtn.open()
    }
    setIsOpenNavManuBtn(!isOpenNavManuBtn)
    
    
  }
  
}


const triggerCard = ()=>{
  
  cardX.trigger()
      navCardBtn.trigger()
       navBg.trigger()
}
const triggerMenu= ()=>{
  
         navBg.trigger()
        navManuBtn.trigger()
       menuX.trigger();
            
}


  
 const animateToCross = (style = "default") => {
  switch (style) {
    case "expand":
      gsap.to('.topLine', {
        rotate: 45,
        scaleX: 1.2,
        y: 6,
        duration: 0.4,
        transformOrigin: "center",
        ease: "back.out(1.7)"
      });
      gsap.to('.middleLine', {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
      gsap.to('.bottomLine', {
        rotate: -45,
        scaleX: 1.2,
        y: -6,
        duration: 0.4,
        transformOrigin: "center",
        ease: "back.out(1.7)"
      });
      break;

    case "fadeTwist":
      gsap.to('.topLine', {
        rotate: 45,
        y: 6,
        opacity: 1,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "power3.out"
      });
      gsap.to('.middleLine', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "expo.out"
      });
      gsap.to('.bottomLine', {
        rotate: -45,
        y: -6,
        opacity: 1,
        transformOrigin: "right center",
        duration: 0.5,
        ease: "power3.out"
      });
      break;

    case "elastic":
      gsap.to('.topLine', {
        rotate: 45,
        y: 6,
        duration: 0.6,
        transformOrigin: "center",
        ease: "elastic.out(1, 0.5)"
      });
      gsap.to('.middleLine', {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to('.bottomLine', {
        rotate: -45,
        y: -6,
        duration: 0.6,
        transformOrigin: "center",
        ease: "elastic.out(1, 0.5)"
      });
      break;

    case "rotate360":
      gsap.to('.topLine', {
        rotate: 135,
        y: 6,
        duration: 0.5,
        transformOrigin: "center",
        ease: "power2.out"
      });
      gsap.to('.middleLine', {
        rotate: 360,
        scale: 0,
        duration: 0.4,
        ease: "power2.in"
      });
      gsap.to('.bottomLine', {
        rotate: -135,
        y: -6,
        duration: 0.5,
        transformOrigin: "center",
        ease: "power2.out"
      });
      break;

    default:
      // basic default cross
      gsap.to('.topLine', {
        rotate: 45,
        y: 6,
        duration: 0.5,
        transformOrigin: "center",
        ease: "power4.out"
      });
      gsap.to('.middleLine', {
        opacity: 0,
        duration: 0.3
      });
      gsap.to('.bottomLine', {
        rotate: -45,
        y: -6,
        duration: 0.5,
        transformOrigin: "center",
        ease: "power4.out"
      });
      break;
  }

    

  gsap.to(menuButtonRef.current, {
    backgroundColor: 'black',
    duration: 0.5,
    ease: "power4.out"
  });
  gsap.to(menuButtonSvgRef.current, {
    stroke: 'white',
    duration: 0.5,
    scale:1.6,
    ease: "power4.out"
  });
};

const animateToHamburger = () => {
  gsap.to('.topLine', {
    rotate: 0,
    y: 0,
    scaleX: 1,
    duration: 0.5,
    transformOrigin: "center",
    ease: "power4.out"
  });
  gsap.to('.middleLine', {
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 0.3,
    ease: "power2.out"
  });
  gsap.to('.bottomLine', {
    rotate: 0,
    y: 0,
    scaleX: 1,
    duration: 0.5,
    transformOrigin: "center",
    ease: "power4.out"
  });
  
  gsap.to(menuButtonRef.current, {
    backgroundColor: 'transparent',
    duration: 0.5,
    ease: "power4.out"
  });
  gsap.to(menuButtonSvgRef.current, {
    stroke: 'black',
    duration: 0.5,
    scale:1,
    ease: "power4.out"
  });
};

  
  
  
 useEffect(() => { 
   
  const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: '100% center',
        end: '+=500',
        scrub: 10,
       // markers: true, // for debugging
      },
    });
    tl.to(".navSvgboder",{
      borderWidth:1.2,
      borderColor: 'black',
      
      duration: 2,
      ease: "power4.inOut",
    },"nav")
    
      tl.to(navBg2Ref.current, {
      height: "5rem",
      duration: 2,
        ease: "power4.inOut"
    },"nav")
  
    
  }, []);
 
  

  return (
    <div style={navConf} className=" z-50 pointer-events-auto top-0 font-[Inter]">
      <div className="flex relative max-h-20 h-20  w-screen font-[Inter] items-center
       default_padding flex-row justify-between">
        
      <div ref={navBgRef} className=" navBg bg-white bg-[hsla(255%,10%,0.98)]2 backdrop-blur-lg h-0 w-screen  -z-[10] absolute top-0 left-0 "></div>
      <div ref={navBg2Ref} className=" navBg bg-white bg-[hsla(255%,10%,0.98)]2 backdrop-blur-lg h-0 w-screen  -z-[10] absolute top-0 left-0 "></div>
      
        <Link to="/" className="break-words  font-extrabold text-3xl
        tracking-[0.5rem]">UBAC {user.name &&<span className="text-sm tracking-normal whitespace-nowrap line-clamp-none absolute  bottom-2 font-light">login by {user.name}</span>}</Link>

        <div className="flex gap-3 flex-row">
          
          <Link to="/account" className="navSvgboder  rounded-full">
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="24" height="24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
            </svg>
          </Link>
          
          <div ref={cardBtnRef} onClick={()=> {   
        triggerCard()
        getCart()
          }} 
          
          className="
          navSvgboder relative cardIcon  rounded-full">
            <div className="rounded-full   w-4 h-4 centre text-xs bg-black text-white absolute top-2 -right-1">5</div>
            {isOpenNavCardBtn?
              <svg className="cardIconSvg" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" width="24" height="24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg> :

            <svg className="cardIconSvg" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M3 3h4l2 12h10l3-8H6"></path>
            </svg>
            }
          </div>
          
          <div ref={menuButtonRef} onClick={()=>{

triggerMenu()
          }}
          className="navSvgboder rounded-full cursor-pointer">
<svg ref={menuButtonSvgRef} xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" width="24" height="24" 
  fill="none" stroke="currentColor" strokeWidth="2" 
  strokeLinecap="round" strokeLinejoin="round">
  <path className="line topLine" d="M4 6h16"></path>
  <path className="line middleLine" d="M4 12h16"></path>
  <path className="line bottomLine" d="M4 18h16"></path>
</svg>

          </div>
        </div>
      </div>
      
      
      
      
      <Menu menuFunX={setMenuX} ref={menuRef} />
      <Card cardFunX={setCardX} triggerCard={triggerCard} cardBtnRef={cardBtnRef} ref={cardRef} />

    </div>
  );
});

export default Nav;
