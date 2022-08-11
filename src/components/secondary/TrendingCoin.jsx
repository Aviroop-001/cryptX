import { Box, Image, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

const TrendingCoin = (coin) => {
  return (
    <Box height='85%'
    width='20%'
    textAlign='center'>
        <Image src={coin.coin.large}
        height='2.5rem'
        width='2.5rem'
        margin='1px auto'
        marginBottom='1rem'>
        </Image>
        <Text fontWeight='bolder' marginBottom='10px' fontFamily='exo'>{coin.coin.name}</Text>
        <Stat fontWeight='bolder'>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
        </Stat>
    </Box>
  )
}

export default TrendingCoin