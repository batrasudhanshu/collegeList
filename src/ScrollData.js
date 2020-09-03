import React, { useState, useEffect } from 'react'


const ScrollData = ({ onChange }) => {
    const [initialscroll, setinitialscroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
    }, []);
    const checkScrollTop = () => {
        if (window.pageYOffset > initialscroll + 800) {
            setinitialscroll((initialscroll) => initialscroll + 800);
            onChange();
        }
    };
    return (
        <div onScroll={checkScrollTop}>

        </div>
    )
}

export default ScrollData
