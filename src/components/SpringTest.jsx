import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const SpringTest = () => {
    const [flipped, setFlipped] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div className="flex justify-center items-center p-8">
            <div onClick={() => setFlipped(!flipped)} className="cursor-pointer">
                <animated.div
                    className="w-64 h-64 bg-blue-500 rounded-xl flex items-center justify-center text-white absolute"
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                >
                    Click to flip
                </animated.div>
                <animated.div
                    className="w-64 h-64 bg-purple-500 rounded-xl flex items-center justify-center text-white absolute"
                    style={{
                        opacity,
                        transform: transform.to(t => `${t} rotateX(180deg)`)
                    }}
                >
                    Physics-based animation!
                </animated.div>
            </div>
        </div>
    );
};

export default SpringTest;