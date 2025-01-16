import React from "react";
import rippleCat from "../../assets/images/ripple-cat.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-details">
        <div className="navbar-logo">
          <a href="##" className="navbar-logo-link">
            <img src={rippleCat} alt="" />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="##" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="##" className="navbar-link">
                Roadmap
              </a>
            </li>
            <li>
              <a href="##" className="navbar-link">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-socials">
          <ul>
            <li>
              <a href="##" className="navbar-link">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="##" className="navbar-link">
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href="##" className="navbar-link">
                <FaTelegram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
