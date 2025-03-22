import { StrictMode, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";
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

  useEffect(() => {
    if (!scrollContainerRef.current) return; // Prevent error if ref is not ready
    const handleScroll = (e) => {
      if (!scrollEnabled) {
        e.preventDefault(); // Prevent actual scrolling
        const prevY = e.deltaY || (e.touches && e.touches[0]?.clientY - lastScrollY);
        
        if (prevY > 0) { // Scroll down
          setFakeScrollY((prev) => {
            const newScrollY = Math.min(prev + 40, window.innerHeight * 2);
            if (newScrollY >= window.innerHeight * 1.5) {
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

    const handleReverseScroll = () => {
      if (scrollEnabled && scrollContainerRef.current && scrollContainerRef.current.scrollTop === 0) {
        setScrollEnabled(false);
        setBallHidden(false);
        setFakeScrollY(window.innerHeight * 2);
    
        const interval = setInterval(() => {
          setFakeScrollY((prev) => {
            const newScrollY = Math.max(prev - 40, 0);
            if (newScrollY <= 0) {
              clearInterval(interval);
            }
            return newScrollY;
          });
        }, 16);
      }
    };
    

    window.addEventListener("wheel", handleScroll, { passive: false });
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
  }, [scrollContainerRef, scrollEnabled]);

  return (
    <>
      {/* Expanding Ball Animation */}
      {!scrollEnabled || !ballHidden ? (
      <div
        className="fixed inset-0 flex items-center justify-center bg-blue-200 z-[60]"
        style={{
          maskImage: `radial-gradient(circle ${fakeScrollY}px at 50% 50%, transparent 50%, black 40%)`, // Change the transparent if u want it to be gradient
        }}
      >
        <p className="z-[60] text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque amet
          voluptatibus quam itaque illum quae excepturi veritatis perferendis officia
          doloremque sint doloribus at, sed, velit quasi incidunt autem corrupti.
        </p>
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
