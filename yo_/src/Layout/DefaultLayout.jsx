
import { Link, Outlet } from "react-router-dom";
import Nav from '../Part/Nav/Nav'
import Footer from '../Part/Footer/Footer'
import MainFooter from '../Part/Footer/MainFooter'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = ({children}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  /*
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=500',
        scrub: true,
        markers: true, // for debugging
      },
    });

    tl.to(navRef.current, { x: 200, rotation: 90, duration: 1 })
      .to(box2Ref.current, { y: 100, scale: 1.5, duration: 1 }, '<') // '<' means start at same time
      .to(box3Ref.current, { x: -200, opacity: 0, duration: 1 });
  }, []);
  */
  
  
  
  return (
    <>

          <Nav ref={containerRef} />
          <div ref={containerRef} className="w-screen pointer-events-none# overflow-hidden# font-[Inter] relative h-screen bg-amber-50 dark:bg-gray-800">
           <Outlet />
           <MainFooter />
           <Footer />
          </div>
    </>
  )
}

export default DefaultLayout