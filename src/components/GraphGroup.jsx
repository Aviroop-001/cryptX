import { Box } from '@chakra-ui/react'
import React from 'react'
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

  return (
    <Box border='1px dashed lime'>
      <Graphs priceData={priceData}/>
      <Graphs priceData={capitalData}/>
    </Box>
  )
}

export default GraphGroup