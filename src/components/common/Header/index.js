import React from "react";
import "./styles.css";
import { Drawer } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="./" className="link">
          Home
        </a>
        <a href="./" className="link">
          Compare
        </a>
        <a href="./" className="link">
          WatchList
        </a>
        <a href="#">
          <Button
            text="DashBoard"
            onClick={() => {
              console.log("dash");
            }}
            // outline={true}
          />
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer></TemporaryDrawer>
      </div>
    </div>
  );
}

export default Header;
