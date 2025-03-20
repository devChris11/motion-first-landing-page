import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const IntersectionTest = () => {
    const { targetRef, isIntersecting, hasIntersected } = useIntersectionObserver({
        threshold: 0.2,
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div ref={targetRef} className="w-64 h-64 bg-gray-800 rounded-lg">
                {hasIntersected && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full flex items-center justify-center text-white"
                    >
                        I animate when I come into view!
                    </motion.div>
                )}
            </div>
            <div className="mt-4 text-white">
                Status: {isIntersecting ? 'Visible' : 'Not visible'}
            </div>
        </div>
    );
};

export default IntersectionTest;