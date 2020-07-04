import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from '@material-ui/core';
import styles from './Charts.module.css';

const LineChart = ({ history }) => {
  return (
    <Card className={styles.barChart}>
      <Line
        data={{
          labels: history.map(({ Date }) => Date),
          datasets: [
            {
              data: history.map(({ Confirmed }) => Confirmed),
              label: 'Infected',
              borderColor: '#396baf',
              backgroundColor: 'rgba(0, 85, 222, 0.2)',
              fill: true,
            },
            {
              data: history.map(({ Recovered }) => Recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(3, 136, 59, 0.5)',
              fill: true,
            },
            {
              data: history.map(({ Deaths }) => Deaths),
              label: 'Deaths',
              borderColor: '#ed3b43',
              backgroundColor: 'rgba(175, 60, 67, 0.5)',
              fill: true,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: 'COVID-19 History ',
            fontSize: 16,
          },
        }}
      />
    </Card>
  );
};

export default LineChart;
