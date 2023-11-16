import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import { coinObject } from "../functions/coinObject";
import Loader from "../components/common/Loader";
import List from "../components/dashBoard/list/List";
import CoinInfo from "../components/coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/coin/LineChart";

import SelectDays from "../components/coin/Select";
import { settingChartData } from "../functions/settingChartData";
import PriceToggle from "../components/coin/priceToggle";

function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(120);
  const [chartData, setChartData] = useState({});

  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) getData();
  }, [id]);

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  async function getData() {
    const data = await getCoinData(id);

    if (data) {
      coinObject(setCoin, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  }

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coin} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coin.name} desc={coin.desc} />
        </>
      )}
    </>
  );
}

export default Coinpage;
