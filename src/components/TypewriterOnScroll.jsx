import {useState, useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterOnScroll({strings, options={}, className='', seen = {threshold: 0.1}}){

    const [isVisible, setIsVisible] = useState(false);
    const [finished, setFinished] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !finished){
                setIsVisible(true);
            }
        }, seen);

        if (ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current){
                observer.unobserve(ref.current);
            }
        };
    }, [seen, finished])

    return(
        <div ref={ref} className={className}>
            {isVisible && 
            (
                <Typewriter
                onInit={(typewriter) => {typewriter
                                            .typeString(strings[0])
                                            .callFunction(() => setFinished(true))
                                            .start();
                }}      
                options={{delay: options.delay || 50, cursor: options.cursor || '|', ...options, loop: false, autoStart: true}}
                />
            )}
         </div>
    );
}

export default TypewriterOnScroll;