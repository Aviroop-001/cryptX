
export const latestCryptoNewsEndpoint = () => `https://crypto-news-live3.p.rapidapi.com/news` ;

export const latestNewsBySearch = (search) => `https://google-news.p.rapidapi.com/v1/search?q=${search}&country=US&lang=en`;

export const trendingCoinsEndpoint =(currency) => `https://api.coingecko.com/api/v3/search/trending?vs_currency=${currency}`;


//FIXME: API call not working
export const allCoinsMarket = (currency, order) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order= ${order}&price_change_percentage=1h,24h,7d`

// export const getSelectedCoinMarket = (coinID) => `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false`

export const getSelectedCoinHistory = (coinID, currency, range) => `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency}&days=${range}`
