import React from "react";
import "./About.css";
import aboutIllustration from "../../assets/images/about-illustration.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-details">
        <div className="about-text">
          <h2>#About RippleCat</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            velit inventore. Molestias repellat ex sequi eius qui, omnis maxime
            corporis quaerat necessitatibus consequuntur distinctio cupiditate
            veniam! Velit ab delectus temporibus.
          </p>
        </div>
        <div className="about-illustration">
          <img src={aboutIllustration} alt="About Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
