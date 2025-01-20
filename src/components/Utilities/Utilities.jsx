import React from "react";
import gigaBot from "../../assets/utilities-images/giga-bot.svg";
import gigaWallet from "../../assets/utilities-images/giga-wallet.svg";
import gigaStake from "../../assets/utilities-images/giga-stake.svg";
import gigaMetaVerse from "../../assets/utilities-images/giga-metaverse.svg";
import "./Utilities.css";
const Utilities = () => {
  return (
    <div className="utilities-container">
      <div className="utilities-details">
        <div className="utilities-main-text">
          <h2>#Utilities</h2>
        </div>
        <div className="utilities-wrapper">
          <div className="utilities-lists">
            <div className="utilities-list">
              <div>
                <img src={gigaBot} alt="" />
              </div>
              <div className="utilities-main-text">
                <h5>GIGA BOT</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat risus nibh hac
                diam. Sollicitudin elit imperdiet urna egestas dignissim.Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="utilities-list">
              <div>
                <img src={gigaStake} alt="" />
              </div>
              <div className="utilities-main-text">
                <h5>GIGA STAKE</h5>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat risus nibh hac
                diam. Sollicitudin elit imperdiet urna egestas dignissim.Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="utilities-list">
              <div>
                <img src={gigaWallet} alt="" />
              </div>
              <div className="utilities-main-text">
                <h5>GIGA WALLET</h5>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat risus nibh hac
                diam. Sollicitudin elit imperdiet urna egestas dignissim.Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="utilities-list">
              <div>
                <img src={gigaMetaVerse} alt="" />
              </div>
              <div className="utilities-main-text">
                <h5>GIGA METAVERSE</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat risus nibh hac
                diam. Sollicitudin elit imperdiet urna egestas dignissim.Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
