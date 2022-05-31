import React, { useEffect } from "react";
import { Subscribe } from "../styles/Subscribe/Subscribe";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SubscribeComponent = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".subscribe", {
      opacity: 1,
      duration: 0.6,
      translateY: 0,

      scrollTrigger: {
        trigger: ".subscribe",
        start: "center bottom",
      },
    });
  });
  
  return (
    <Subscribe className="subscribe">
      <div className="subscribe-header">
        <h2>
          Subscribe Now for <br /> Get Special Features!
        </h2>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <button>Subscribe Now</button>
    </Subscribe>
  );
};

export default SubscribeComponent;
