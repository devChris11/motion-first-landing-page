import { useEffect } from 'react';
import useScrollStore from '../store/scrollStore';

const ScrollObserver = () => {
    const setScrollPosition = useScrollStore((state) => state.setScrollPosition);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition({
                scrollY: window.scrollY,
                viewportHeight: window.innerHeight,
                documentHeight: document.documentElement.scrollHeight
            });
        };

        // Initial call
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [setScrollPosition]);

    return null; // This component doesn't render anything
};

export default ScrollObserver;