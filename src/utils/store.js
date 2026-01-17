export const isMobile = () => {
    window.onresize = () => {
        return window.innerWidth <= 600 ? true : false;
    }
};
