
export const latestCryptoNewsEndpoint = () => `https://newsdata.io/api/1/crypto?apikey=pub_100209094d87d72ef051c7efb83c3bce7c3c5&country=in,gb,us,de,fr&language=en` ;

export const trendingCoinsEndpoint =(currency) => `https://api.coingecko.com/api/v3/search/trending?vs_currency=${currency}`;

export const allCoinsMarket = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order= market_cap_desc&price_change_percentage=1h,24h,7d`