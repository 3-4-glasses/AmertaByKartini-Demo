import { StrictMode, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";
import "./assets/fonts/fonts.css";
import logo from './assets/logo_amerta_by_kartini.png'
import AboutUs from "./AboutUs.jsx";
import OrderSteps from "./OrderSteps.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";

const App = () => {
  const scrollContainerRef = useRef(null);
  const [fakeScrollY, setFakeScrollY] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [ballHidden, setBallHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleTap = () => {
    if (isMobile && !scrollEnabled && !isAnimating) {
      setIsAnimating(true);
      
      const interval = setInterval(() => {
        setFakeScrollY((prev) => {
          const newScrollY = Math.min(prev + 60, window.innerHeight * 2);
          if (newScrollY >= window.innerHeight * 1.9) {
            clearInterval(interval);
            setBallHidden(true);
            setScrollEnabled(true);
            setIsAnimating(false);
          }
          return newScrollY;
        });
      }, 16);
    }
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return; // Prevent error if ref is not ready
    
    const handleScroll = (e) => {
      if (!scrollEnabled && !isMobile) {
        e.preventDefault(); // Prevent actual scrolling
        const prevY = e.deltaY || (e.touches && e.touches[0]?.clientY - lastScrollY);
        
        if (prevY > 0) { // Scroll down
          setFakeScrollY((prev) => {
            const newScrollY = Math.min(prev + 40, window.innerHeight * 2);
            if (newScrollY >= window.innerHeight * 1.9) {
              setBallHidden(true);
              setScrollEnabled(true);
            }
            return newScrollY;
          });
        } else if (prevY < 0) { //Scroll up
          setFakeScrollY((prev) => {
            const newScrollY = Math.max(prev - 40, 0);
            return newScrollY;
          });
        }
      }
      setLastScrollY(e.touches?.[0]?.clientY || 0);
    };

    // Handle reverse animation when scrolling back to top
    const handleReverseScroll = () => {
      if (scrollEnabled && scrollContainerRef.current && scrollContainerRef.current.scrollTop === 0) {
        setScrollEnabled(false);
        setBallHidden(false);
        setFakeScrollY(window.innerHeight * 1.9);
        setIsAnimating(true);
    
        const interval = setInterval(() => {
          setFakeScrollY((prev) => {
            const newScrollY = Math.max(prev - 40, 0);
            if (newScrollY <= 0) {
              clearInterval(interval);
              setIsAnimating(false);
            }
            return newScrollY;
          });
        }, 16);
      }
    };
    
    if (!isMobile) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }
    
    window.addEventListener("touchmove", handleScroll, { passive: false });

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleReverseScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleReverseScroll);
      }
    };
  }, [scrollContainerRef, scrollEnabled, isMobile, isAnimating]);

  return (
    <>
      {/* Expanding Ball Animation */}
      {!scrollEnabled || !ballHidden ? (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#E3E2DD] z-[60] p-4"
        style={{
          maskImage: `radial-gradient(circle ${fakeScrollY}px at 50% 50%, transparent 50%, black 40%)`,
          cursor: isMobile ? "pointer" : "default"
        }}
        onClick={handleTap}
      >
        <img className="h-10 mb-1 md:mb-4" src={logo} />
        <h1 className="z-[60] text-[#302F2B] text-center text-4xl md:text-6xl lato">
          Your forever moment, forever yours.
        </h1>
        <div className="mt-6 md:mt-10 animate-bounce">
          {isMobile ? (
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <circle cx="12" cy="12" r="8" className="animate-pulse"/>
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="h-8 w-8 text-[#302F2B]"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
            </svg>
          )}
        </div>
      </div>
      ) : null}

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className={`scroll-container h-screen relative ${
          scrollEnabled ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        <Header />
        <Carousel />
        <AboutUs />
        <div className="w-full pt-4 pb-4 text-4xl font-extrabold playfair-display text-white [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)] text-center bg-[#A5D2CF]">
          <p>Let's make your event one of a kind!</p>
        </div>
        <OrderSteps />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);