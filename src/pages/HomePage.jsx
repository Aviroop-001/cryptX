import { Box } from '@chakra-ui/react'
import React from 'react'
import AllCoins from '../components/AllCoins'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <Box>
        <Header/>
        <AllCoins/>
        <Dashboard/>
    </Box>
  )
}

export default HomePage