import React from "react";
import "./styles.css";
import Button from "../../common/Button";
import devices from "../../../assets/devices.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Track crypto through a public api in real time.Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button text={"Dashboard"}></Button>
          <Button text={"Share"} outline={true}></Button>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          className="device"
          src={devices}
          alt=""
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        ></motion.img>
        <img className="gradient" src={gradient} alt=""></img>
      </div>
    </div>
  );
}

export default MainComponent;
