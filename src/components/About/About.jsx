import React from "react";
import "./About.css";
import aboutIllustration from "../../assets/images/about-illustration.png";
const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-details">
        <div className="about-text">
          <h2>#About RippleCat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Consequat risus nibh hac
            diam. Sollicitudin elit imperdiet urna egestas dignissim. Ut purus
            ipsum imperdiet nulla aliquet neque. Donec et molestie consequat id.
            Nulla turpis sed blandit vehicula fringilla accumsan tellus
            facilisis. Id nam erat nam id eget sed facilisi augue. Ipsum integer
            tortor amet dictum. Laoreet viverra. Lorem ipsum dolor sit amet
            consectetur. Consequat risus nibh hac diam. Sollicitudin elit
            imperdiet urna egestas dignissim. Ut purus ipsum imperdiet nulla
            aliquet neque. Donec et molestie consequat id. Nulla turpis sed
            blandit vehicula fringilla accumsan tellus facilisis. Id nam erat
            nam id eget sed facilisi augue. Ipsum integer tortor amet dictum.
            Laoreet viverra.Lorem ipsum dolor sit amet consectetur. Consequat
            risus nibh hac diam. Sollicitudin elit imperdiet urna egestas
            dignissim. Ut purus ipsum imperdiet nulla aliquet neque. Donec et
            molestie consequat id. Nulla turpis sed blandit vehicula fringilla
            accumsan tellus facilisis. Id nam erat nam id eget sed facilisi
            augue. Ipsum integer tortor amet dictum. Laoreet viverra.
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
