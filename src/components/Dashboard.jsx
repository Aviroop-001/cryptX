import { Box, Button, Input } from '@chakra-ui/react'
import {React, useState, useEffect} from 'react'
import Axios from 'axios'
import TrendingCoin from './secondary/TrendingCoin'
import LatestNews from './secondary/LatestNews'
import { trendingCoinsEndpoint, latestCryptoNewsEndpoint } from '../api'

const Dashboard = () => {

  //states
  const [currency, setcurrency] = useState();
  const [trendingCoins, settrendingCoins] = useState();
  const [latestNews, setlatestNews] = useState();

  //functions
  const fetchTrendingCoins = async () =>{
    try {
      const {data} = await Axios.get(trendingCoinsEndpoint(currency));
      console.log("Trending coins Fetched");
      settrendingCoins(data.coins);
    } catch (err) {
      console.log(err);
    }
  }
  const fetchLatestNews = async () =>{
    try {
      const {data} = await Axios.get(latestCryptoNewsEndpoint);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTrendingCoins();
    // fetchLatestNews();
  }, [])
  
  return (
    <Box height='50vh' width='90vw' margin='1px auto' border='1px solid blue'>
    <Box height='55%' width='100%' margin='1px auto' display='flex' justifyContent='space-around' alignItems='center' padding='1px auto' border='1px solid red'>
      {trendingCoins?.map( coin =>(
        <TrendingCoin key={coin.id} coin={coin.item} />
      ))}
    </Box>
    <Box height='45%' width='100%' display='flex' justifyContent='space-around' alignItems='center' padding='1px auto' >
      <LatestNews/>
      <LatestNews/>
      <LatestNews/>
      <LatestNews/>
    </Box>
    </Box>
  )
}

export default Dashboard