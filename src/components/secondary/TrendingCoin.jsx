import { Box, Image, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

const TrendingCoin = () => {
  return (
    <Box height='85%'
    width='20%'
    textAlign='center'>
        <Image src='https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg'
        height='5rem'
        width='5rem'
        margin='1px auto'>
        </Image>
        <Stat fontWeight='bolder'>
        <StatLabel>Sent</StatLabel>
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