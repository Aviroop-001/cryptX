import { Box, Text } from '@chakra-ui/react'
import { React, useState } from 'react'
import { getDateTime, convertToICS } from '../logic';
import Graphs from './secondary/Graphs';

const GraphGroup = ({ priceData, capitalData }) => {

  //Filtering alternate dates to beautify data
  priceData = priceData.filter(function(d, idx) {
    if (idx%2 === 0) {
        return false; // skip
    }
    return true;
  });
  capitalData = capitalData.filter(function(d, idx) {
    if (idx%2 === 0) {
        return false; // skip
    }
    return true;
  });
  var capitalData = capitalData.map(function(item) { return [item[0], item[1]/1e6] })

  //states

  //functions

  //components
  return (
    <Box width='90%'
    margin='1px auto'
    padding='2rem'>
      
      <Box width='70%'
      margin='2rem auto'
      marginTop='1rem'>
        <Text textAlign='center' fontSize='4xl' fontStyle='italic' fontFamily='Poppins'>Price</Text>
        <Graphs priceData={priceData}/>
      </Box>
      <Box width='70%'
      margin='3rem auto'>
        <Text textAlign='center' fontSize='4xl' fontStyle='italic' fontFamily='Poppins'>Market Capital &nbsp;<span style={{fontSize:'1.2rem', fontStyle:'normal'}}>(in million)</span>
        </Text>
      <Graphs priceData={capitalData}/>
      </Box>
    </Box>
  )
}

export default GraphGroup