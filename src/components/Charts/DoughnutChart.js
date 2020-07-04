import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from '@material-ui/core';
import styles from './Charts.module.css';

const DoughnutChart = ({ infected, recovered, deaths, title }) => {
  const data = {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: title,
        data: [infected, recovered, deaths],
        backgroundColor: ['#396baf', '#a2ce33', '#ed3b43'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 16,
    },
    legend: {
      position: 'bottom',
    },
  };

  return (
    <Card className={styles.doughnutChart}>
      <Doughnut data={data} options={options} />
    </Card>
  );
};

export default DoughnutChart;
