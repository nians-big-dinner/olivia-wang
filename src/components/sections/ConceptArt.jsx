import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ConceptArt = () => {
    const sectionRef = useRef(null);
    const bgRef1 = useRef(null);
    const bgRef2 = useRef(null);
    const bgRef3 = useRef(null);
    const bgRef4 = useRef(null);

    // useGSAP(() => {
    //         // gsap.from(bgRef1.current, {
    //         //     y: -sectionRef.current.offsetHeight * 0.05,
    //         //     ease: "power2.out",
    //         //     scrollTrigger: {
    //         //         trigger: sectionRef.current,
    //         //         start: `top+=${sectionRef.current.offsetHeight * 0.10}px bottom`,
    //         //         end: `+=${sectionRef.current.offsetHeight * 0.2}px`,
    //         //         scrub: true,
    //         //     },
    //         // });
    //         // gsap.from(bgRef2.current, {
    //         //     y: -sectionRef.current.offsetHeight * 0.1,
    //         //     ease: "power2.in",
    //         //     scrollTrigger: {
    //         //         trigger: sectionRef.current,
    //         //         start: `top+=${sectionRef.current.offsetHeight * 0.3}px bottom`,
    //         //         end: `+=${sectionRef.current.offsetHeight * 0.11}px`,
    //         //         scrub: true,
    //         //     },
    //         // });
    //         // gsap.from(bgRef3.current, {
    //         //     y: -sectionRef.current.offsetHeight * 0.2,
    //         //     scrollTrigger: {
    //         //         trigger: sectionRef.current,
    //         //         start: `top+=${sectionRef.current.offsetHeight * 0.35}px bottom`,
    //         //         end: `+=${sectionRef.current.offsetHeight * 0.35}px`,
    //         //         scrub: true,
    //         //     },
    //         // });
    //         // gsap.from(bgRef4.current, {
    //         //     y: -sectionRef.current.offsetHeight * 0.2,
    //         //     scrollTrigger: {
    //         //         trigger: sectionRef.current,
    //         //         start: `top+=${sectionRef.current.offsetHeight * 0.65}px bottom`,
    //         //         end: `+=${sectionRef.current.offsetHeight * 0.15}px`,
    //         //         scrub: true,
    //         //     },
    //         // });
    // });

    return (
        <div id="concept-art-section" className="relative w-screen">
            <h2 className="absolute absolute-center-w text-center text-7xl md:text-9xl text-glow-gold text-white top-24 font-dosis-semibold z-50">
                Concept art
            </h2>
            <img
                ref={sectionRef}
                src='./images/long_background/long_background.png'
                className="z-0 w-full"
            />
            <img
                src='./images/long_background/long_background1.png'
                className="absolute top-0 z-20 w-full"
            />
            <img
                ref={bgRef1}
                src='./images/long_background/long_background2.png'
                className="absolute top-0 z-10 w-full"
            />
            <img
                ref={bgRef2}
                src='./images/long_background/long_background3.png'
                className="absolute top-0 z-20 w-full"
            />
            <img
                ref={bgRef3}
                src='./images/long_background/long_background4.png'
                className="absolute top-0 w-full"
            />
            <img
                ref={bgRef4}
                src='./images/long_background/long_background5.png'
                className="absolute top-0 w-full"
            />
        </div>
    );
};

export default ConceptArt;
