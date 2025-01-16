import React from "react";
import heropageBlend from "../../assets/images/heropage-blend.svg";
import heropageButon from "../../assets/images/Buttom.svg";
import heropageCatBlend from "../../assets/images/hero-page-cat.svg";
import "./HeroPage.css";
const HeroPage = () => {
  return (
    <div className="hero-page-container">
      <div className="hero-page-details">
        <div className="hero-page-text">
          <div className="gradient-text">PLAY. EARN. REPEAT</div>
          <p>
            Join the Ultimate Tap-to-Earn Game on Telegram!
            <br />
            Turn Every Tap into Rewards—Earn Crypto, Points, and Exclusive
            Perks!
          </p>
          <button className="hero-page-button">
            <img src={heropageButon} alt="" />
          </button>
        </div>
        <div className="hero-page-illustration">
          <div className="hero-page-images">
            <img
              src={heropageBlend}
              alt="Hero Page Blend"
              className="first-blend"
            />
            <img
              src={heropageCatBlend}
              alt="Hero Page Cat Blend"
              className="second-blend"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
