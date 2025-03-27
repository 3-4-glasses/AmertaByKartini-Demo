import React, { useState, useEffect } from 'react';
import anniversaryPic from './assets/anniversaryImg.jpg'
import bridalImg from './assets/bridalshower.jpg';
import birthdayPic from './assets/birthdayImg.png'; 

function Carousel() {
    const slides = [
        {
            image: anniversaryPic,
            title1: "Anniversary",
            title2: "Event",
            overlayColor: "bg-[#E3E2DE]",
            fontColor: "text-[#302F2B]"
        },
        {
            image: birthdayPic,
            title1: "Birthday",
            title2: "Celebration",
            overlayColor: "bg-[#BCD0DB]",
            fontColor: "text-[#302F2B]"
        },
        {
            image: bridalImg,
            title1: "Bridal",
            title2: "Shower",
            overlayColor: "bg-[#E9DCC9]",
            fontColor: "text-[#898363]"
        }
    ];

    const [current, setCurrent] = useState(0);
    const numSlides = slides.length;
    const [direction, setDirection] = useState(1); // For automation, 1 is left to right, -1 is right to left
    const [showLeftGlow, setShowLeftGlow] = useState(false); 
    const [showRightGlow, setShowRightGlow] = useState(true);

    const nextSlide = () => {
        if (current === numSlides - 1) {
            setDirection(-1);
            setCurrent(c => c - 1);
        } else {
            setCurrent(c => c + 1);
        }
        setShowLeftGlow(current + 1 > 0);
        setShowRightGlow(current + 1 < numSlides - 1);
    };
    
    const prevSlide = () => {
        if (current === 0) {
            setDirection(1);
            setCurrent(c => c + 1);
        } else {
            setCurrent(c => c - 1);
        }
        setShowLeftGlow(current - 1 > 0);
        setShowRightGlow(current - 1 < numSlides - 1);
    };

    useEffect(() => {
        // Update glow states based on current slide
        setShowLeftGlow(current > 0);
        setShowRightGlow(current < numSlides - 1);

        const timer = setInterval(() => {
            if (direction === 1) {
                if (current === numSlides - 1) {
                    setDirection(-1);
                    setCurrent(c => c - 1);
                } else {
                    setCurrent(c => c + 1);
                }
            } else {
                if (current === 0) {
                    setDirection(1);
                    setCurrent(c => c + 1);
                } else {
                    setCurrent(c => c - 1);
                }
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [current, direction, numSlides]);
     
    return (
        <>
        <div className="relative w-full h-screen overflow-hidden">
            <div className="fixed top-0 left-0 -z-100 w-full max-h-screen h-screen max-h-screen overflow-hidden">
                <div className="absolute inset-0 w-full h-full">

                    {/* Carousel */}
                    <div 
                        className="flex h-full transition-transform duration-200 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="relative flex-none w-full h-full">
                                <img 
                                    src={slide.image} 
                                    alt={`Slide ${index + 1}`} 
                                    className="object-cover w-full h-full"
                                />
                                
                                {/* Overlay text containers */}
                                <div className="absolute left-0 md:left-12 bottom-12 z-10 px-4">
                                    <div className={`${slide.overlayColor} opacity-90 px-4 py-2 w-full`}>
                                        <h2 className={`${slide.fontColor} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide theseasons-bold`}>
                                            {slide.title1}
                                        </h2>
                                    </div>
                                    <div className={`${slide.overlayColor} opacity-90 px-2 md:px-4 py-1 md:py-2 mb-2 ml-4 md:ml-8 w-fit`}>
                                        <p className={`${slide.fontColor} text-xl sm:text-xl md:text-3xl lg:text-5xl theseasons-bold`}>
                                            {slide.title2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                    {/* Glow effect and manual control of carousel */}
                    {showLeftGlow && (
                        <div 
                            className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                            onClick={prevSlide}
                        >
                            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent opacity-25 pointer-events-none" />
                        </div>
                    )}
                    {showRightGlow && (
                        <div 
                            className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                            onClick={nextSlide}
                        >
                            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent opacity-25 pointer-events-none" />
                        </div>
                    )}

                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full cursor-pointer transition-colors duration-300 ${
                                    index === current ? 'bg-white' : 'bg-gray-500 bg-opacity-70'
                                }`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                </div>
            
        </>
    );
}

export default Carousel;