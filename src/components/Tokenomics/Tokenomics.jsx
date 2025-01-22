import React from "react";
import "./Tokenomics.css";
import tokenomicsIllustration from "../../assets/images/tokenomics.png";
const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <div className="tokenomics-main-text">
        <h3>#Our Tokenomics</h3>
      </div>
      <div className="tokenomics-details">
        <div className="tokenomics-text">
          <div className="pointers-texts">
            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>01</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Team & Development</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>02</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Community Airdrop</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>03</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Marketing & Partnership</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>04</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Liquidity Pool</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tokenomics-illustration">
          <img src={tokenomicsIllustration} alt="Tokenomics Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
