import React from "react";
import devices from "../../assets/devices.png";
import "./styles.css";

function LandingPage() {
  return (
    <div className="image-bg">
      <img src={devices} alt="" />
    </div>
  );
}

export default LandingPage;
