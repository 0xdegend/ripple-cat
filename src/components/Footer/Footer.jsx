import React from "react";
import "./Footer.css";
import footerIllustration from "../../assets/images/footer-illustration.png";
import subscribeButton from "../../assets/images/subscribe-button.svg";
import footerBlend from "../../assets/images/footer-blend.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-illustration">
          <img src={footerIllustration} alt="footer illustration" />
        </div>
        <div className="footer-text">
          <div className="footer-text-container">
            <div className="footer-main-text">
              <h4>Don't Miss Out, Stay Updated</h4>
            </div>
            <h5>Don't hesitate to Subscribe to latest news about RippleCat</h5>
          </div>
          <div className="footer-input">
            <input type="text" placeholder="Enter Your Email" />
            <button>
              <img src={subscribeButton} alt="Subscribe Button" />
            </button>
          </div>
          <div className="footer-socials">
            <a href="##">
              <FaXTwitter />
            </a>
            <a href="##">
              <FaDiscord />
            </a>
            <a href="##">
              <FaTelegram />
            </a>
          </div>
          <div className="footer-copyright">
            <p>© {currentYear} RIPPLECAT. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="footer-blend">
        <img src={footerBlend} alt="" />
      </div>
    </div>
  );
};

export default Footer;
