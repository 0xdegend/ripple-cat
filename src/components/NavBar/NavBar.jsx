import React, { useEffect, useState } from "react";
import rippleCat from "../../assets/images/ripple-cat.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import "./NavBar.css";
const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={isSticky ? "navbar-container, sticky" : "navbar-container"}>
      <div className="navbar-details">
        <div className="navbar-logo">
          <a href="##" className="navbar-logo-link">
            <img src={rippleCat} alt="" />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <AnchorLink href="#about" className="navbar-link">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#roadmap" className="navbar-link">
                Roadmap
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#faq" className="navbar-link">
                FAQs
              </AnchorLink>
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
