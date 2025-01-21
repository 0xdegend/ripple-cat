import React from "react";
import howToBuyIllustration from "../../assets/images/how-to-buy-illustration.png";
import "./HowToBuy.css";
import ContractAddress from "../ContractAddress/ContractAddress";
const HowToBuy = () => {
  return (
    <div className="how-to-buy-container">
      <div className="how-to-buy-details">
        <div className="how-to-buy-illustration">
          <img src={howToBuyIllustration} alt="How to Buy Illustration" />
        </div>

        <div className="how-to-buy-text">
          <div className="how-to-buy-main-text">
            <h3>#How It Buy</h3>
          </div>
          <div className="pointers-texts">
            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>01</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Create A Wallet</h5>
                <p>
                  Download Metamask, TrustWallet or your wallet of choice from
                  the Apple App Store or Google Play store for free. Desktop
                  users, download the google chrome extension by going to
                  metamask.io.
                </p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>02</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Get some XRP</h5>
                <p>
                  Fund your wallet with XRP before swapping to $RippleCAT. If
                  you don’t have any XRP, you can buy directly on Uniswap or
                  Flooz with your credit card below or with Metamask or
                  TrustWallet transfer from another wallet, or buy on another
                  exchange and send it to your wallet
                </p>
              </div>
            </div>

            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>03</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Go to your Phantom wallet or Uniswap</h5>
                <p>
                  Visit app.uniswap.org in Google Chrome or on the browser
                  inside your Metamask mobile app. Connect your wallet. Paste
                  the $RippleCAT token address into Uniswap, select the amount
                  of XRP you want to swap for $RippleCAT, and confirm. When
                  Metamask prompts you for a wallet signature, sign the
                  transaction. $RippleeCAT Token
                  Address: 0xaa23aadb7afa2810263653a34ba2c21c7a
                </p>
              </div>
            </div>
            <div className="pointers-text">
              <div className="pointer-number">
                <div className="pointer-main-number">
                  <h5>04</h5>
                </div>
              </div>
              <div className="pointer-main-text">
                <h5>Swap XRP for $RippleCAT</h5>
                <p>
                  Click the Swap button to buy $RippleCAT. We have zero taxes so
                  you don’t need to worry about buying with a specific slippage,
                  although you may need to use slippage during times of high
                  market volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContractAddress/>
    </div>
  );
};

export default HowToBuy;
