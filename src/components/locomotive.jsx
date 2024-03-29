import locomotiveScroll from "locomotive-scroll";
import React,{useEffect} from 'react'

function Locscroll(){
    const scrollRef = React.createRef();

    useEffect(() => {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });
    });

    return(
        <div className="scroll" ref={scrollRef}>
            <div
            data-scroll data-scroll-speed="3" data-scroll-position="top">
                <Web />
            </div>
        </div>
    )
}

export default Locscroll