import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-card ${
          coin.price_change_percentage_24h < 0 && "grid-card-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt="" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon></TrendingUpRoundedIcon>
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip red-chip">
              <TrendingDownRoundedIcon></TrendingDownRoundedIcon>
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
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
          <p className="volume-market-info">
            <span style={{ color: "var(--white)" }}>Total Volume : </span>
            {coin.total_volume.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>

          <p className="volume-market-info">
            <span style={{ color: "var(--white)" }}>Market Cap: </span>

            {coin.market_cap.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
