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

  const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2; // Ensure full coverage

  useEffect(() => {
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
      if (scrollEnabled && scrollContainerRef.current?.scrollTop === 0) {
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
  }, [fakeScrollY, scrollEnabled]);

  // Ball grows when scrolling down, shrinks when scrolling up
  const ballStyle = useSpring({
    width: ballHidden ? "0px" : `${0 + (fakeScrollY / (window.innerHeight * 2)) * maxSize}px`,
    height: ballHidden ? "0px" : `${0 + (fakeScrollY / (window.innerHeight * 2)) * maxSize}px`,
    opacity: ballHidden ? 0 : 1,
    config: { tension: 170, friction: 20 }, 
  });

  return (
    <>
      {/* Expanding Ball Animation */}
      {!scrollEnabled || !ballHidden ? (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-1000">
          
          <animated.div className="rounded-full bg-amber-950 aspect-square bg-transparent" style={ballStyle} />
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
