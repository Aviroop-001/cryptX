import { React, useContext } from 'react'
import { Box, Image, Text,Stat ,StatNumber,StatHelpText,StatArrow, Tooltip} from '@chakra-ui/react'
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
    <Box height='35vh' width={{base: '42vw', md:'35vw'}} display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center' padding='5px' margin='1.5rem 2px' borderRadius='5px' _hover={{boxShadow:'1px 1px 3px grey'}} onClick={(e) => selectCoin()}>
        <Box width='100%' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center'>
          <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
            <Image src={coin.image} height='4.5rem' width='4.5rem' borderRadius='50%'>
            </Image>
            <Text fontFamily='exo' fontWeight='bolder'>{coin.name}</Text>
          </Box>
            <Tooltip hasArrow label='Current Price' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
              <Text fontFamily='exo' fontSize='1.2rem'>{convertToICS(coin.current_price)}</Text>
            </Tooltip>
            <Box>
              <Tooltip hasArrow label='Highest Price in 24h' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
                <Text color='lime' fontWeight='bold'>{convertToICS(coin.high_24h)}</Text>
              </Tooltip>
              <Tooltip hasArrow label='Lowest Price in 24h' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
                <Text color='crimson' fontWeight='bold'>{convertToICS(coin.low_24h)}</Text>
              </Tooltip>
            </Box>
          </Box>
          <Tooltip hasArrow label='Market Capital' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
              <Text fontFamily='Poppins' fontSize='1.1rem'>{convertToICS(coin.market_cap)}</Text>
            </Tooltip>
            <Box display='flex' flexDirection='row' width='100%' justifyContent='space-evenly'>
            <Tooltip hasArrow label='Price Change in 1hr' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
            <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.1rem'>
                {(coin.price_change_percentage_1h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_1h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            </Tooltip>
            <Tooltip hasArrow label='Price Change in 24hr' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
            <Stat maxWidth='max-content' margin='auto 0px'>
              <StatNumber fontSize='1.1rem'>
                {(coin.price_change_percentage_24h_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_24h_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            </Tooltip>
            <Tooltip hasArrow label='Price Change in 7 days' bg='teal.900' color='wheat' fontSize='1rem' width='fit-content' fontWeight='bold'>
            <Stat maxWidth='max-content'>
              <StatNumber fontSize='1.1rem' >
                {(coin.price_change_percentage_7d_in_currency>=0) ? <StatArrow type='increase' color='lime' />
                : <StatArrow type='decrease' color='crimson' />
                }
                {coin.price_change_percentage_7d_in_currency.toString().slice(0,5)}%
              </StatNumber>
            </Stat>
            </Tooltip>
            </Box>
          </Box>
  )
}

export default CoinDetails