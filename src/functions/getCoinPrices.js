import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const coinPrices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily&precision=full`
    )
    .then((response) => {
      console.log(response.data.prices);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log(error);
    });

  return coinPrices;
};
