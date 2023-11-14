import * as React from "react";

import Drawer from "@mui/material/Drawer";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuRoundedIcon className="link"></MenuRoundedIcon>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="drawer-div">
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
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
