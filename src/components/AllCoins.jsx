import { Box, StackDivider, VStack, Image, Text,Stat ,StatNumber,StatHelpText,StatArrow, Menu, MenuButton, Button, MenuList, MenuItem, Input} from '@chakra-ui/react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {React, useState, useEffect, useContext} from 'react'
import { ContextState } from '../Context/ContextProvider';
import { Link } from "react-router-dom";
import Axios from 'axios'
import { allCoinsMarket } from '../api'
import CoinDetails from './secondary/CoinDetails'

const AllCoins = () => {

  //states
  const { currency, setcurrency, selectedCoin, setselectedCoin } = ContextState();
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
    width='90vw'
    margin='2rem auto'
    marginTop='5rem'>
        <Box width='80%'
        height='5rem'
        display='flex'
        flexDirection='row'
        margin='1px auto'
        marginBottom='15vh'>
            <Input margin='auto 2rem' colorScheme='facebook'>
            </Input>
            <Menu colorScheme='cyan'>
              <MenuButton margin='auto 1rem' color='navy' fontWeight='bolder' as={Button} rightIcon={<ArrowDropDownIcon />}>
                Sort by&nbsp;&nbsp;
              </MenuButton>
              <MenuList  color='navy' backgroundColor='blue.100'>
                <MenuItem fontWeight='bolder'>Market Capital: low to high</MenuItem>
                <MenuItem fontWeight='bolder'>Market Capital: high to low</MenuItem>
                <MenuItem fontWeight='bolder'>Volume: low to high</MenuItem>
                <MenuItem fontWeight='bolder'>Volume: high to low</MenuItem>
                <MenuItem fontWeight='bolder'>Name: A-Z</MenuItem>
              </MenuList>
            </Menu>
        </Box>
        <Box
        width='100%'
        display='flex'
        justifyContent='space-evenly'
        flexWrap='wrap'>
          {allCoins?.map(coin =>(
            <Link key={coin.id} to={`/coins/${coin.id}`}>
              <CoinDetails coin={coin}/>
            </Link>
          ))}
      </Box>
    </Box>
  )
}

export default AllCoins