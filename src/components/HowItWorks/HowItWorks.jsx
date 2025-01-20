import React from "react";
import rippleCatIllustration from "../../assets/images/how-it-works-illustration.png";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-details">
        <div className="how-it-works-illustration">
          <img src={rippleCatIllustration} alt="" />
        </div>
        <div className="how-it-works-text">
          <h3>#How It Works</h3>
          <div className="pointers-texts">
            <div className="pointers-text">
              <div className="pointer-number">
                <h5>01</h5>
              </div>
              <div className="pointer-main-text">
                <h5>Join the Game</h5>
                <p>
                  Start by clicking the button below to add the bot to your
                  Telegram
                </p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <h5>02</h5>
              </div>
              <div className="pointer-main-text">
                <h5>Tap, Play & Earn Points</h5>
                <p>
                  Complete simple tasks, Refer friends, watch ads, and play
                  mini-games.
                </p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <h5>03</h5>
              </div>
              <div className="pointer-main-text">
                <h5>Earn Rewards</h5>
                <p>
                  Redeem your earnings for cryptocurrency or in-game upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
