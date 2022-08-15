import { Box } from '@chakra-ui/react'
import React from 'react'
import { getDateTime } from '../../logic';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Graphs = ({priceData}) => {

    //Filtering alternate dates to beautify data
    priceData = priceData.filter(function(d, idx) {
        if (idx%2 === 0) {
            return false; // skip
        }
        return true;
    });

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            // display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    const chartData = {
        labels: priceData.map((data) => getDateTime(data[0])),
        datasets:[{
            data: priceData.map((data) => data[1]),
            pointRadius: 1,
            // pointHoverRadius: 5,
            pointBorderColor: "yellow",
            pointBackgroundColor: "yellow",
            pointStyle: 'circle',
            lineBorderColor:'#F5DEB3',
            lineBorderWidth: 1
            }
        ],
        borderColor: "yellow",
        backgroundColor: 'yellow',
        borderWidth: 2
    }
  return (
    <Box>
        <Line options={options} data={chartData} />
    </Box>
  )
}

export default Graphs