import { Box, StackDivider, VStack, Image, Text,Stat ,StatNumber,StatHelpText,StatArrow, Menu, MenuButton, Button, MenuList, MenuItem, Input} from '@chakra-ui/react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {React, useState, useEffect} from 'react'
import Axios from 'axios'
import { allCoinsMarket } from '../api'
import CoinDetails from './secondary/CoinDetails'

const AllCoins = () => {

  //states
  const [currency, setcurrency] = useState();
  const [allCoins, setallCoins] = useState();

  //functions
  const fetchAllCoinsMarket= async() =>{
    try {
      const {data} = await Axios.get(allCoinsMarket(currency));
      console.log("Coins' market fetched successfully");
      setallCoins(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllCoinsMarket();
  }, [])
  

  return (
    <Box
    height='100vh'
    width='90vw'
    margin='2rem auto'>
        <Box width='80%'
        height='5rem'
        display='flex'
        flexDirection='row'
        margin='1px auto'>
            <Input margin='auto 2rem' colorScheme='facebook'>
            </Input>
            <Menu colorScheme='cyan'>
              <MenuButton margin='auto 1rem' as={Button} rightIcon={<ArrowDropDownIcon />}>
                Sort by
              </MenuButton>
              <MenuList>
                <MenuItem>Market Capital: low to high</MenuItem>
                <MenuItem>Market Capital: high to low</MenuItem>
                <MenuItem>Volume: low to high</MenuItem>
                <MenuItem>Volume: high to low</MenuItem>
                <MenuItem>Name: A-Z</MenuItem>
              </MenuList>
            </Menu>
        </Box>
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={1}
        align='stretch'
        padding='0.5rem'
        width='100%'>
          {allCoins?.map(coin =>(
            <CoinDetails coin={coin}/>
          ))}
      </VStack>
    </Box>
  )
}

export default AllCoins