import React from "react";
import roadMapIllustration from "../../assets/images/roadmap-illustration.png";
import "./RoadMap.css";
const RoadMap = () => {
  return (
    <div className="roadmap-container">
      <div className="roadmap-details">
        <div className="roadmap-main-text">
          <h3>#Roadmap</h3>
        </div>

        <div className="roadmap-illustration">
          <img src={roadMapIllustration} alt="Road Map" />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
