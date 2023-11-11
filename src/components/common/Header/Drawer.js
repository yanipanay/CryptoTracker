import * as React from "react";

import Drawer from "@mui/material/Drawer";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

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
              <a href="./" className="link">
                Home
              </a>
              <a href="./" className="link">
                Compare
              </a>
              <a href="./" className="link">
                WatchList
              </a>
              <a href="./" className="link">
                Dashboard
              </a>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
