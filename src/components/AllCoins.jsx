import { Box, StackDivider, VStack, Image, Text,Stat ,StatNumber,StatHelpText,StatArrow, Menu, MenuButton, Button, MenuList, MenuItem, Input, Select, Progress} from '@chakra-ui/react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {React, useState, useEffect, useContext} from 'react'
import { ContextState } from '../Context/ContextProvider';
import { Link } from "react-router-dom";
import Axios from 'axios'
import { allCoinsMarket } from '../api'
import CoinDetails from './secondary/CoinDetails'

const AllCoins = () => {

  //states
  const { currency,setcurrency,selectedCoin,setselectedCoin,allCoinsOrder,setallCoinsOrder } = ContextState();
  const [allCoins, setallCoins] = useState();

  //functions
  const fetchAllCoinsMarket= async() =>{
    try {
      const {data} = await Axios.get(allCoinsMarket(currency, allCoinsOrder));
      console.log("Coins' market fetched successfully");
      setallCoins(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleOrderChange = async(e) =>{
    setallCoinsOrder(e.target.value);
  }

  useEffect(() => {
    fetchAllCoinsMarket();
  }, [])
  useEffect(() => {
    fetchAllCoinsMarket();
  }, [allCoinsOrder])
  

  return (
    <Box
    width='90vw'
    margin='2rem auto'
    marginTop='5rem'>
        <Box width='80%'
        height='5rem'
        display='flex'
        flexDirection='row'
        alignItems='center'
        margin='1px auto'
        marginBottom='15vh'>
            <Input margin='auto 2rem' colorScheme='facebook'>
            </Input>
            <Select defaultValue='market_cap_desc' variant='flushed' borderRadius='10px' colorScheme='teal' width='35vw' textAlign='center' fontWeight='bolder' backgroundColor='teal.700'
            onChange={handleOrderChange}>
              <option value='market_cap_asc' style={{backgroundColor:'#e4f0d8', color:'#1F1D36', fontFamily:'exo', fontWeight:'bolder'}}>Market Capital: Ascending</option>
              <option value='market_cap_desc' style={{backgroundColor:'#e4f0d8', color:'#1F1D36', fontFamily:'exo', fontWeight:'bolder'}}>Market Capital Descending</option>
              <option value='volume_asc' style={{backgroundColor:'#e4f0d8', color:'#1F1D36', fontFamily:'exo', fontWeight:'bolder'}}>Volume: Ascending</option>
              <option value='volume_desc' style={{backgroundColor:'#e4f0d8', color:'#1F1D36', fontFamily:'exo', fontWeight:'bolder'}}>Volume: Descending</option>
              <option value='id_asc' style={{backgroundColor:'#e4f0d8', color:'#1F1D36', fontFamily:'exo', fontWeight:'bolder'}}>Name: A-Z</option>
            </Select>
        </Box>
        <Box
        width='100%'
        display='flex'
        justifyContent='space-evenly'
        flexWrap='wrap'>
          {allCoins? allCoins.map(coin =>(
            <Link key={coin.id} to={`/coins/${coin.id}`}>
              <CoinDetails coin={coin}/>
            </Link>
          )) : <Progress size='xs' width='100%' height='3px' isIndeterminate colorScheme='teal' />
        }
      </Box>
    </Box>
  )
}

export default AllCoins