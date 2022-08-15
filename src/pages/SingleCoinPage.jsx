import {React, useEffect, useState} from 'react'
import { Box, Image, Text, Stat, StatArrow, StatNumber, StatGroup, Progress } from '@chakra-ui/react';
// import { Line } from 'react-chartjs-2';
import Axios from 'axios'
import Header from '../components/Header'
import Graphs from '../components/secondary/Graphs';
import { getSelectedCoinHistory } from '../api';
import { convertToICS, toDateTime } from '../logic';
import { ContextState } from '../Context/ContextProvider';

const SingleCoinPage = () => {

  //states
  const { currency, setcurrency, selectedCoin, setselectedCoin } = ContextState();
  const [historicalPricesData, sethistoricalPricesData] = useState();
  const [historicalMarketCapData, sethistoricalMarketCapData] = useState();

  //functions
  // const getSingleCoinDetails = async() =>{
  //   const {data} = await Axios.get(getSelectedCoinMarket(selectedCoin.id));
  //   // setselectedCoin(data);
  // }
  const getSingleCoinHistoryPrice10D = async() =>{
    const {data} = await Axios.get(getSelectedCoinHistory(selectedCoin.id, currency, '10'));
    console.log("Coin's History Fetched");
    sethistoricalPricesData(data.prices);
    sethistoricalMarketCapData(data.market_caps);
    console.log(data.prices);
  }

  useEffect(() => {
    getSingleCoinHistoryPrice10D();
  }, [selectedCoin]);
  

  return (
    <Box width='100%' backgroundColor='#1F1D36' border='1px solid red' color='wheat'>
      <Header/>
      {/* Coin Name */}
      <Text textAlign='center' fontSize='5xl' fontWeight='bolder' fontFamily='Poppins'>           
        {selectedCoin.name}
      </Text>

      {/* Coin Market Details */}
      <Box display='flex' flexDirection='row' textAlign='center' justifyContent='space-evenly' alignItems='center' margin='1rem'>
        <Box fontFamily='Poppins'>
          <Text fontSize='6xl' fontWeight='bolder' fontFamily='montserrat'>{selectedCoin.market_cap_rank}</Text>
          Market Rank
          </Box>
        <Box fontFamily='Poppins'>
          <Text fontSize='2xl'>{convertToICS(selectedCoin.market_cap)}</Text>
          Market Capital
          </Box>
      </Box>

      {/* Coin Details */}
      <Box display='flex' flexDirection='row' justifyContent='space-evenly' margin='2rem 1rem'>
        {/* Coin Icon */}
        <Image src={selectedCoin.image} height='11rem' width='11rem'>
        </Image>
        {/* Current Price, lowest, highest in 24 hrs */}
          <Box textAlign='center' margin='auto 0px' fontSize='xl' fontWeight='bolder' fontFamily='Poppins'>
            Current Price:  {convertToICS(selectedCoin.current_price)} {currency}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly' fontSize='lg'>
            <Text color='lime' fontWeight='bold' maxWidth='fit-content'>{convertToICS(selectedCoin.high_24h)}</Text>
            <Text color='crimson' fontWeight='bold'>{convertToICS(selectedCoin.low_24h)}</Text>
            </Box>
          </Box>
          {/* Change in price Stats */}
          <Box width='30%' display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'>
          <Text textAlign='center' fontWeight='bolder' fontFamily='Poppins' fontStyle='italic' margin='0.5rem 1px'>
            Price Change -
          </Text>
          <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.2rem'>
                1 hour : {(selectedCoin.price_change_percentage_1h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {selectedCoin.price_change_percentage_1h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            <Stat maxWidth='max-content' margin='auto 0px'>
              <StatNumber fontSize='1.2rem'>
                24 hours : {(selectedCoin.price_change_percentage_24h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {selectedCoin.price_change_percentage_24h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.2rem' >
                7 days : {(selectedCoin.price_change_percentage_7d_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {selectedCoin.price_change_percentage_7d_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
          </Box>
      </Box>
      
      {/* Charts */}
      <Box border='1px solid yellow'>
          {/* <Line /> */}
          {historicalPricesData ? <Graphs priceData={historicalPricesData} />
          : <Progress colorScheme='red' height='4px' width='90%' margin='5px auto' borderRadius='5px' size='xs' isIndeterminate />
          }
      </Box>
    </Box>
  )
}

export default SingleCoinPage