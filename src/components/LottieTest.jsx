import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieTest = () => {
    return (
        <div className="flex justify-center items-center p-8">
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ height: '300px', width: '300px' }}
            />
        </div>
    );
};

export default LottieTest;