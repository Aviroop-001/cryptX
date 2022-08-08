import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import TrendingCoin from './secondary/TrendingCoin'
import LatestNews from './secondary/LatestNews'

const dashboard = () => {

  return (
    <Box height='50vh' width='90vw' margin='1px auto' border='1px solid blue'>

    <Box height='55%' width='100%' margin='1px auto' display='flex' justifyContent='space-around' alignItems='center' padding='1px auto' border='1px solid red'>
      <TrendingCoin />
      <TrendingCoin />
      <TrendingCoin />
      <TrendingCoin />
      <TrendingCoin />
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

export default dashboard