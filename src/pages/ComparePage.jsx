import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoins from "../components/ComparePage/SelectCoins";
import SelectDays from "../components/coin/Select";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/coinObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import List from "../components/dashBoard/list/List";
import CoinInfo from "../components/coin/CoinInfo";
import Loader from "../components/common/Loader";
import LineChart from "../components/coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import PriceToggle from "../components/coin/priceToggle";

function ComparePage() {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData();
    console.log(coin1Data, coin2Data);
  }, []);

  const getData = async () => {
    //set loading
    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);

    if (data1) {
      coinObject(setCoin1Data, data1);
    }

    if (data2) {
      coinObject(setCoin2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);

      if (prices1.length > 0 && prices2.length > 0) {
        //set loading
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(coin1, days, newType);
    const prices2 = await getCoinPrices(coin2, days, newType);

    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handleCoinChange1 = async (e) => {
    setCoin1(e.target.value);
    const data = await getCoinData(e.target.value);
    coinObject(setCoin1Data, data);

    getBothCoins();
  };

  const handleCoinChange2 = async (e) => {
    setCoin2(e.target.value);
    const data = await getCoinData(e.target.value);
    coinObject(setCoin2Data, data);

    getBothCoins();
  };

  async function getBothCoins() {
    const prices1 = await getCoinPrices(coin1, days, priceType);
    const prices2 = await getCoinPrices(coin2, days, priceType);

    settingChartData(setChartData, prices1, prices2);
  }

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoins
              coin1={coin1}
              coin2={coin2}
              handleCoinChange1={handleCoinChange1}
              handleCoinChange2={handleCoinChange2}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin2Data} />
          </div>
          <div className="grey-wrapper">
            <PriceToggle
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coin1Data.name} desc={coin1Data.desc} />
          <CoinInfo heading={coin2Data.name} desc={coin2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
