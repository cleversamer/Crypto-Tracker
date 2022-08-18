import cryptocurrencies from "./cryptocurrencies.json";

const mapCoinsToHomeScreenView = () => {
  return cryptocurrencies.map((coin) => {
    const {
      current_price,
      id,
      image,
      market_cap_rank,
      market_cap,
      name,
      price_change_percentage_24h,
      symbol,
    } = coin;

    return {
      current_price,
      id,
      image,
      market_cap_rank,
      market_cap: beautifyMarketCap(market_cap),
      name,
      price_change_percentage_24h,
      symbol: `${symbol}/USDT`,
    };
  });
};

const beautifyMarketCap = (mcap) => {
  let i = mcap;
  let zeroCount = 0;
  while (i >= 10) {
    i /= 10;
    ++zeroCount;
  }

  const zeroCountIn = (array = []) => array.some((v) => v === zeroCount);

  if (zeroCountIn([0, 1, 2])) {
    return mcap;
  }

  if (zeroCountIn([3, 4, 6])) {
    const thousands = (mcap / 1000).toFixed(2);
    return `${thousands}K`;
  }

  if (zeroCountIn([6, 7, 8])) {
    const millions = (mcap / 1000000).toFixed(2);
    return `${millions}M`;
  }

  if (zeroCountIn([9, 10, 11])) {
    const billions = (mcap / 1000000000).toFixed(2);
    return `${billions}B`;
  }

  if (zeroCountIn([12, 13, 14])) {
    const trillions = (mcap / 1000000000000).toFixed(2);
    return `${trillions}T`;
  }

  // Default value is regex value that returns the number separated by commas.
  return mcap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default {
  mapCoinsToHomeScreenView,
};
