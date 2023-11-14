import React from "react";
import "./styles.css";
import { Drawer } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/compare" className="link">
          Compare
        </Link>
        <Link to="/watchlist" className="link">
          WatchList
        </Link>
        <Link to="/dashboard" className="link">
          <Button
            text="DashBoard"
            onClick={() => {
              console.log("dash");
            }}
            // outline={true}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer></TemporaryDrawer>
      </div>
    </div>
  );
}

export default Header;
