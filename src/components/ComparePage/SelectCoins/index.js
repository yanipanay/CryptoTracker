import React, { useEffect, useState } from "react";
import "./styles.css";
import { MenuItem, Select } from "@mui/material";
import { get100Coins } from "../../../functions/get100Coins";

function SelectCoins({ coin1, coin2, handleCoinChange1, handleCoinChange2 }) {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "var(--white)" },
    "& .MuiSvgIcon-root": { color: "var(--white)" },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };

  return (
    <div className="selection-options">
      <div className="select-coin">
        <p>Crypto 1</p>
        <Select
          sx={style}
          value={coin1}
          label="Crypto 1"
          onChange={handleCoinChange1}
        >
          {allCoins
            .filter((item) => {
              return item.id !== coin2.id;
            })
            .map((coin) => {
              return (
                <MenuItem key={coin.id} value={coin.id}>
                  {coin.name}
                </MenuItem>
              );
            })}
        </Select>
      </div>
      <div className="select-coin">
        <p>Crypto 2</p>
        <Select
          sx={style}
          value={coin2}
          label="Crypto 2"
          onChange={handleCoinChange2}
        >
          {allCoins
            .filter((item) => {
              return item.id !== coin1.id;
            })
            .map((coin) => {
              return (
                <MenuItem key={coin.id} value={coin.id}>
                  {coin.name}
                </MenuItem>
              );
            })}
        </Select>
      </div>
    </div>
  );
}

export default SelectCoins;
