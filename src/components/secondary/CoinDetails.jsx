import { React, useContext } from 'react'
import { Box, Image, Text,Stat ,StatNumber,StatHelpText,StatArrow} from '@chakra-ui/react'
import { convertToICS } from '../../logic'
import { ContextState } from '../../Context/ContextProvider';

const CoinDetails = ({coin}) => {

  //states
  const { currency, setcurrency, selectedCoin, setselectedCoin } = ContextState();

  //functions
  const selectCoin =() =>{
    setselectedCoin(coin);
  }

  return (
    <Box height='4.5rem' width='100%' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' padding='5px' borderRadius='5px' _hover={{boxShadow:'1px 1px 3px grey'}} onClick={(e) => selectCoin()}>
            <Image src={coin.image} height='3.5rem' width='3.5rem' borderRadius='50%'>
            </Image>
            <Text fontFamily='exo' fontWeight='bolder'>{coin.name}</Text>
            <Text fontFamily='exo'>{convertToICS(coin.current_price)}</Text>
            <Text fontFamily='exo'>{convertToICS(coin.market_cap)}</Text>
            <Box>
              <Text color='lime' fontWeight='bold'>{convertToICS(coin.high_24h)}</Text>
              <Text color='crimson' fontWeight='bold'>{convertToICS(coin.low_24h)}</Text>
            </Box>
            <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.2rem'>
                {(coin.price_change_percentage_1h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_1h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            <Stat maxWidth='max-content' margin='auto 0px'>
              <StatNumber fontSize='1.2rem'>
                {(coin.price_change_percentage_24h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_24h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.2rem' >
                {(coin.price_change_percentage_7d_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_7d_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
          </Box>
  )
}

export default CoinDetails