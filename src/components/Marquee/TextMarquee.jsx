import React from "react";
import Marquee from "react-fast-marquee";
import "./TextMarquee.css";
const TextMarquee = () => {
  return (
    <div className="marquee-container">
      <Marquee>
        <div className="marquee-details">
          <div className="circle"></div>
          <h5>RippleCat</h5>

          <div className="circle"></div>
          <h5>RippleCat</h5>

          <div className="circle"></div>
          <h5>RippleCat</h5>

          <div className="circle"></div>
          <h5>RippleCat</h5>

          <div className="circle"></div>
          <h5>RippleCat</h5>
        </div>
      </Marquee>
    </div>
  );
};

export default TextMarquee;
