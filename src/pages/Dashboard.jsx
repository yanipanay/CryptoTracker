import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import axios from "axios";

import TabsComponent from "../components/dashBoard/tabs";
import Search from "../components/dashBoard/Search";
import PaginationComponent from "../components/dashBoard/pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

const defArray = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 3050351,
    market_cap: 59880718418944,
    market_cap_rank: 1,
    fully_diluted_valuation: 64350636180696,
    total_volume: 1052973846217,
    high_24h: 3108306,
    low_24h: 3057037,
    price_change_24h: -42516.294022060465,
    price_change_percentage_24h: -1.37466,
    market_cap_change_24h: -571303448628.3203,
    market_cap_change_percentage_24h: -0.94505,
    circulating_supply: 19541300,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 5128383,
    ath_change_percentage: -40.25691,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 3993.42,
    atl_change_percentage: 76622.58074,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:23.763Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 170441,
    market_cap: 20631923339034,
    market_cap_rank: 2,
    fully_diluted_valuation: 20631923339034,
    total_volume: 1141127640943,
    high_24h: 172809,
    low_24h: 169253,
    price_change_24h: -600.0627896900696,
    price_change_percentage_24h: -0.35083,
    market_cap_change_24h: 50848097833,
    market_cap_change_percentage_24h: 0.24706,
    circulating_supply: 120260281.435035,
    total_supply: 120260281.435035,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -52.58857,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 610572.82592,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 73.63732563299148,
      currency: "btc",
      percentage: 7363.732563299147,
    },
    last_updated: "2023-11-13T14:49:22.810Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 83.24,
    market_cap: 7229957307059,
    market_cap_rank: 3,
    fully_diluted_valuation: 7229957307059,
    total_volume: 2828647523916,
    high_24h: 83.63,
    low_24h: 83.16,
    price_change_24h: -0.11618539380542359,
    price_change_percentage_24h: -0.13938,
    market_cap_change_24h: -2945681999.926758,
    market_cap_change_percentage_24h: -0.04073,
    circulating_supply: 86804455790.3595,
    total_supply: 86804455790.3595,
    max_supply: null,
    ath: 91.22,
    ath_change_percentage: -8.6939,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 36.86,
    atl_change_percentage: 125.96717,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:45:00.331Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 20297,
    market_cap: 3147358300659,
    market_cap_rank: 4,
    fully_diluted_valuation: 3147358300659,
    total_volume: 61184228822,
    high_24h: 20858,
    low_24h: 20315,
    price_change_24h: -409.76289869895845,
    price_change_percentage_24h: -1.97893,
    market_cap_change_24h: -40161213884.28613,
    market_cap_change_percentage_24h: -1.25995,
    circulating_supply: 153856150,
    total_supply: 153856150,
    max_supply: 200000000,
    ath: 50351,
    ath_change_percentage: -59.37126,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 2.58,
    atl_change_percentage: 791352.48166,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:26.385Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 53.59,
    market_cap: 2904033740914,
    market_cap_rank: 5,
    fully_diluted_valuation: 5412008453318,
    total_volume: 77817164491,
    high_24h: 55.8,
    low_24h: 53.95,
    price_change_24h: -1.784662493611627,
    price_change_percentage_24h: -3.22266,
    market_cap_change_24h: -67162231457.90332,
    market_cap_change_percentage_24h: -2.26044,
    circulating_supply: 53652766196,
    total_supply: 99988240531,
    max_supply: 100000000000,
    ath: 215.1,
    ath_change_percentage: -74.81812,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.159343,
    atl_change_percentage: 33894.1982,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:28.726Z",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 4582.73,
    market_cap: 2015857850795,
    market_cap_rank: 6,
    fully_diluted_valuation: 2684968036211,
    total_volume: 217318681682,
    high_24h: 4943.54,
    low_24h: 4624.22,
    price_change_24h: -315.16554127898144,
    price_change_percentage_24h: -6.43472,
    market_cap_change_24h: -48577396435.94629,
    market_cap_change_percentage_24h: -2.35306,
    circulating_supply: 422164741.431944,
    total_supply: 562291054.556762,
    max_supply: null,
    ath: 19286.66,
    ath_change_percentage: -75.23182,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 38.03,
    atl_change_percentage: 12462.43588,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-11-13T14:49:28.203Z",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 83.17,
    market_cap: 2007506268479,
    market_cap_rank: 7,
    fully_diluted_valuation: 2007580844508,
    total_volume: 600420486018,
    high_24h: 83.45,
    low_24h: 83.12,
    price_change_24h: -0.11955040370858683,
    price_change_percentage_24h: -0.14354,
    market_cap_change_24h: -11352066985.416504,
    market_cap_change_percentage_24h: -0.5623,
    circulating_supply: 24146502272.5478,
    total_supply: 24147399281.0863,
    max_supply: null,
    ath: 87.19,
    ath_change_percentage: -4.59463,
    ath_date: "2020-03-13T02:35:16.858Z",
    atl: 65.31,
    atl_change_percentage: 27.37139,
    atl_date: "2021-05-19T13:14:05.611Z",
    roi: null,
    last_updated: "2023-11-13T14:49:31.632Z",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    current_price: 170314,
    market_cap: 1538703460859,
    market_cap_rank: 8,
    fully_diluted_valuation: 1538703460859,
    total_volume: 1164385108,
    high_24h: 172634,
    low_24h: 169258,
    price_change_24h: -836.4215304193785,
    price_change_percentage_24h: -0.48871,
    market_cap_change_24h: 6161862194,
    market_cap_change_percentage_24h: 0.40207,
    circulating_supply: 8954087.84271287,
    total_supply: 8954087.84271287,
    max_supply: 8954087.84271287,
    ath: 358528,
    ath_change_percentage: -52.06961,
    ath_date: "2021-11-10T14:40:47.256Z",
    atl: 35697,
    atl_change_percentage: 381.39628,
    atl_date: "2020-12-22T04:08:21.854Z",
    roi: null,
    last_updated: "2023-11-13T14:49:28.809Z",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 30.36,
    market_cap: 1074094747613,
    market_cap_rank: 9,
    fully_diluted_valuation: 1382766434466,
    total_volume: 33136755117,
    high_24h: 32.37,
    low_24h: 30.44,
    price_change_24h: -1.777786233191339,
    price_change_percentage_24h: -5.5311,
    market_cap_change_24h: -49998574558.53467,
    market_cap_change_percentage_24h: -4.4479,
    circulating_supply: 34954756232.0105,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 225.26,
    ath_change_percentage: -86.34858,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 1.38,
    atl_change_percentage: 2135.79543,
    atl_date: "2017-11-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:28.896Z",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    current_price: 6.34,
    market_cap: 913900789693,
    market_cap_rank: 10,
    fully_diluted_valuation: 913900531918,
    total_volume: 83701360655,
    high_24h: 6.62,
    low_24h: 6.37,
    price_change_24h: -0.21350098867905842,
    price_change_percentage_24h: -3.25861,
    market_cap_change_24h: -17478514804.513794,
    market_cap_change_percentage_24h: -1.87663,
    circulating_supply: 141813886383.705,
    total_supply: 141813846383.705,
    max_supply: null,
    ath: 53.62,
    ath_change_percentage: -87.96888,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.00552883,
    atl_change_percentage: 116575.85211,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:23.303Z",
  },
  {
    id: "tron",
    symbol: "trx",
    name: "TRON",
    image:
      "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    current_price: 9.1,
    market_cap: 810551351547,
    market_cap_rank: 11,
    fully_diluted_valuation: 810552403047,
    total_volume: 27083818308,
    high_24h: 9.21,
    low_24h: 9.01,
    price_change_24h: 0.070626,
    price_change_percentage_24h: 0.78211,
    market_cap_change_24h: 9294692634,
    market_cap_change_percentage_24h: 1.16001,
    circulating_supply: 88681821864.3754,
    total_supply: 88681936908.166,
    max_supply: null,
    ath: 14.67,
    ath_change_percentage: -37.59179,
    ath_date: "2018-01-05T00:00:00.000Z",
    atl: 0.117589,
    atl_change_percentage: 7684.00934,
    atl_date: "2017-11-12T00:00:00.000Z",
    roi: {
      times: 56.51751717480505,
      currency: "usd",
      percentage: 5651.751717480505,
    },
    last_updated: "2023-11-13T14:49:32.257Z",
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    current_price: 1231.15,
    market_cap: 702920918124,
    market_cap_rank: 12,
    fully_diluted_valuation: 1262316520500,
    total_volume: 74846245053,
    high_24h: 1360.87,
    low_24h: 1243.65,
    price_change_24h: -83.86125214308709,
    price_change_percentage_24h: -6.37723,
    market_cap_change_24h: -32623038642.79358,
    market_cap_change_percentage_24h: -4.43523,
    circulating_supply: 556849971.2305644,
    total_supply: 1000000000,
    max_supply: 1000000000,
    ath: 3862.15,
    ath_change_percentage: -67.3065,
    ath_date: "2021-05-10T00:13:57.214Z",
    atl: 9.55,
    atl_change_percentage: 13126.32422,
    atl_date: "2017-11-29T00:00:00.000Z",
    roi: null,
    last_updated: "2023-11-13T14:49:25.746Z",
  },
];

function Dashboard() {
  const [coins, setCoins] = useState(defArray);
  const [search, setSearch] = useState("");
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  // TODO : set this to true a default
  const [loading, setLoading] = useState(true);

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    let prevInd = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevInd, prevInd + 10));
  };

  //TODO : uncomment this after work is done
  // setPaginatedCoins(coins.slice(0, 10));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setLoading(false);
    }
  };

  return (
    <>
      <Header></Header>
      <BackToTop />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
          ></TabsComponent>
          {!search && (
            <PaginationComponent page={page} handleChange={handleChange} />
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;
