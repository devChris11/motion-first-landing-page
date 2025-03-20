import { create } from 'zustand';

const useScrollStore = create((set) => ({
    scrollY: 0,
    scrollDirection: 'none',
    scrollProgress: 0,
    viewportHeight: 0,
    documentHeight: 0,

    setScrollPosition: (position) => set((state) => ({
        scrollY: position.scrollY,
        scrollDirection: position.scrollY > state.scrollY ? 'down' : 'up',
        scrollProgress: position.scrollY / (position.documentHeight - position.viewportHeight),
        viewportHeight: position.viewportHeight,
        documentHeight: position.documentHeight
    })),
}));

export default useScrollStore;