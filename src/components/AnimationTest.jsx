import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/animations/gsapConfig';

const AnimationTest = () => {
    const gsapRef = useRef(null);

    // GSAP animation with ScrollTrigger
    useEffect(() => {
        const element = gsapRef.current;

        gsap.fromTo(
            element,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-16 p-4">
            {/* Framer Motion example */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 bg-purple-500 rounded-full"
            />

            {/* GSAP with ScrollTrigger example */}
            <div ref={gsapRef} className="w-32 h-32 bg-blue-500 rounded-full">
                GSAP Element
            </div>
        </div>
    );
};

export default AnimationTest;