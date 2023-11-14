import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";

function List({ coin }) {
  return (
    // <tr className="list-row">
    //   <td></td>
    //   {coin.name}
    // </tr>

    <tr className="list-row">
      <Tooltip title="Logo" placement="bottom">
        <td className="td-image">
          <img src={coin.image} className="coin-logo" alt="" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
        <td>
          <div>
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>

      {coin.price_change_percentage_24h > 0 ? (
        <Tooltip title="Change in last 24hrs" placement="bottom-start">
          <td className="chip-flex-list">
            <div className="price-chip-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip-list">
              <TrendingUpRoundedIcon></TrendingUpRoundedIcon>
            </div>
          </td>
        </Tooltip>
      ) : (
        <Tooltip title="Change in last 24hrs" placement="bottom-start">
          <td className="chip-flex-list">
            <div className="price-chip-list red-chip-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip-list red-chip-list">
              <TrendingDownRoundedIcon></TrendingDownRoundedIcon>
            </div>
          </td>
        </Tooltip>
      )}
      <Tooltip title="Current Price" placement="bottom">
        <td>
          <h3
            className="td-center"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            {coin.current_price.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom">
        <td>
          <p className="volume-market-info-list td-right">
            {coin.total_volume.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom">
        <td className="market-cap">
          <p className="volume-market-info-list td-right">
            {coin.market_cap.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
