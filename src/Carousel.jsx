import React, { useState, useEffect, useRef } from 'react';
import anniversaryPic from './assets/anniversaryImg.webp';
import bridalImg from './assets/bridalshower.webp';
import birthdayPic from './assets/birthday.webp'; 

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
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [direction, setDirection] = useState(1);
    const [showLeftGlow, setShowLeftGlow] = useState(false); 
    const [showRightGlow, setShowRightGlow] = useState(true);
    const timerRef = useRef(null);
    const numSlides = slides.length;

    useEffect(() => {
        const loadCurrentImage = new Promise((resolve, reject) => {
            const img = new Image();
            img.src = slides[current].image;
            img.fetchPriority = "high";
            img.onload = resolve;
            img.onerror = reject;
        });

        loadCurrentImage
            .then(() => {
                setImagesLoaded(true);
                const remainingImages = slides
                    .filter((_, index) => index !== current)
                    .map(slide => {
                        return new Promise(resolve => {
                            const img = new Image();
                            img.src = slide.image;
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    });
                return Promise.all(remainingImages);
            })
            .catch(err => {
                console.error("Error loading first image:", err);
                setImagesLoaded(true);
            });
    }, []);

    const nextSlide = () => {
        if (current === numSlides - 1) {
            setDirection(-1);
            setCurrent(c => c - 1);
        } else {
            setCurrent(c => c + 1);
        }
        updateGlowStates(current + 1);
    };

    const prevSlide = () => {
        if (current === 0) {
            setDirection(1);
            setCurrent(c => c + 1);
        } else {
            setCurrent(c => c - 1);
        }
        updateGlowStates(current - 1);
    };

    const updateGlowStates = (index) => {
        setShowLeftGlow(index > 0);
        setShowRightGlow(index < numSlides - 1);
    };

    useEffect(() => {
        updateGlowStates(current);
        timerRef.current = setInterval(() => {
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

        return () => clearInterval(timerRef.current);
    }, [current, direction, numSlides]);

    if (!imagesLoaded) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-100">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-700">Loading images...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen">
            <div className="hidden" aria-hidden="true">
                {slides.map((slide, index) => (
                    <link 
                        key={`preload-${index}`} 
                        rel="preload" 
                        as="image" 
                        href={slide.image}
                        fetchpriority={index === current ? "high" : "low"}
                    />
                ))}
            </div>

            <div className="fixed -z-100 w-full h-screen max-h-screen">
                <div className="absolute inset-0 w-full h-full">
                    <div 
                        className="flex h-full transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="relative flex-none w-full h-full">
                                <img 
                                    src={slide.image} 
                                    alt={`${slide.title1} ${slide.title2}`} 
                                    loading={index === current ? 'eager' : 'lazy'}
                                    fetchpriority={index === current ? "high" : "auto"}
                                    className="object-cover w-full h-full"
                                    style={{ aspectRatio: "16/9", objectPosition: "center" }}
                                />
                                <div className="absolute left-0 md:left-12 bottom-12 z-10 px-4">
                                    <div className={`${slide.overlayColor} opacity-90 px-4 py-2 w-fit`}>
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

            {showLeftGlow && (
                <div 
                    className="absolute left-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-white to-transparent opacity-60"/>
                </div>
            )}
            {showRightGlow && (
                <div 
                    className="absolute right-0 w-1/2 h-full cursor-pointer z-10"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-white to-transparent opacity-60"/>
                </div>
            )}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        aria-current={index === current}
                        className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full cursor-pointer transition-colors duration-300 ${
                            index === current ? 'bg-white' : 'bg-gray-500 bg-opacity-70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
