import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from '@material-ui/core';
import styles from './Charts.module.css';

const BarChart = ({ infected, recovered, deaths, title }) => {
  const data = {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'People',
        data: [infected, recovered, deaths],
        backgroundColor: ['#396baf', '#a2ce33', '#ed3b43'],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 16,
    },
    lagend: {
      display: false,
    },
  };

  return (
    <Card className={styles.barChart}>
      <Bar data={data} options={options} />
    </Card>
  );
};

export default BarChart;
