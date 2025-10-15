import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Input = ({className,placeholder,onChange,error,label,type}) => {
const [inputValue , setInputValue] = useState("")
const [inputBorderIsOpen , setInputBorderIsOpen] = useState(true)
  const labelRef = useRef(null);
  const containerRef = useRef(null);
  const inputBorderRef = useRef(null);

const labelActive=()=>{
       const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
    tl.to(labelRef.current, {
     y: "0",
     opacity: 1,
            duration: 0.5,
      ease: 'power4.inOut',
    },"samev");
    tl.to(inputBorderRef.current, {
     width: "100%",
     opacity: 1,
            duration: 0.5,
      ease: 'power4.inOut',
    },"samev");
    return () => {
      tl.kill();
    };
 }
const labelDeActive=()=>{
       const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
    tl.to(labelRef.current, {
     y: '1.75rem',
     opacity: 0,
      duration: 0.5,
      ease: 'power4.inOut',
    },"same");
    tl.to(inputBorderRef.current, {
     width: "0%",
     opacity: 1,
            duration: 0.5,
      ease: 'power4.inOut',
    },"same");
    
    
    return () => {
      tl.kill();
    };
 }


const hendleOnChange=(e)=>{
  setInputValue(e.target.value);
}

  useEffect(() => {
 if (inputBorderIsOpen){
   labelActive()
 }else{
   labelDeActive()
 }
  }, [inputBorderIsOpen,setInputBorderIsOpen]);
  
  
  
  useEffect(() => {
    setInputBorderIsOpen(true)
    if(inputValue){
     if(inputBorderIsOpen){
      }else{
        setInputBorderIsOpen(true)
      }
      
    }else{
      setInputBorderIsOpen(false)

    }
    
    
    
  }, [inputValue,setInputValue]);









  return (
    <div ref={containerRef} className="w-full relative text-xl  border-b-2#  border-b-red-600 dark-bg">
    
    <div ref={inputBorderRef} className="  w-0 h-full absolute to-0 bg-transparent pointer-events-none  border-b-2 border-black outline-none  dark:border-blue-800">
    
    </div>
    
      <label
        ref={labelRef}
        
        className="block font-medium opacity-0 pointer-events-none bg-transparent translate-y-7 text-sm mb-1"
      >
        {label}<span className="text-red-500">*</span>  {error && <span className=" text-red-500 mr-1 font-light text-xs">{error}</span>}
      </label>
       
      <input
      type={type||"text"}
        value={inputValue}
        onChange={(e)=>{hendleOnChange(e); onChange(e)}}
        placeholder={placeholder}
        style={{borderBottomColor:error?"red":""}}
        className="w-full bg-gray-1001  border-b-2 border-gray-200 outline-none  py-1 dark-bg  dark:border-gray-800"
      />
    </div>
  );
};

export default Input;