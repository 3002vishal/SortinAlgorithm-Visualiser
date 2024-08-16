import React from 'react';
import classes from './SortingAlgorithmVisulisor.module.css';
import Bar from '../Bar/Bar';
import ReactApexChart from 'react-apexcharts';

const SortingAlgorithmVisulisor = (props) => {
  const { array } = props;

  // Calculate max for normalization
  const max = Math.max(...array);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: 'Bars',
      data: array,
    },
  ];

  return (
    <div className={classes['bar-container']}>
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={500} width={1220} />
    </div>
  );
};

export default SortingAlgorithmVisulisor;
