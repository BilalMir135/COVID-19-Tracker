import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import styles from './Global.module.css';
import Cards from '../Cards/Cards';
import { fecthGlobalData, fetchHistory } from '../../api';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';

const Global = () => {
  const [globalData, setGlobalData] = useState({});
  const [history, sethistory] = useState([]);

  useEffect(() => {
    const fecthapi = async () => {
      setGlobalData(await fecthGlobalData());
    };

    const fetchapiHistory = async () => {
      sethistory(await fetchHistory());
    };

    fecthapi();

    fetchapiHistory();
  }, []);

  if (!globalData || !history) {
    return (
      <div className='spinner'>
        <CircularProgress />;
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.earth}></div>
          <Typography variant='h2' className={styles.title}>
            Global Cases
          </Typography>
        </div>
        <Grid container justify='center'>
          <Grid
            container
            item
            xs={12}
            lg={10}
            spacing={1}
            className={styles.sections}
            justify='center'
          >
            <Cards data={globalData} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            className={styles.sections}
            justify='center'
          >
            <Grid item xs={12} sm={5}>
              <DoughnutChart
                infected={globalData.TotalConfirmed}
                recovered={globalData.TotalRecovered}
                deaths={globalData.TotalDeaths}
                title='Overall Cases'
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <DoughnutChart
                infected={globalData.NewConfirmed}
                recovered={globalData.NewRecovered}
                deaths={globalData.NewDeaths}
                title='Current Cases'
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={10}
            spacing={2}
            className={styles.sections}
            justify='center'
          >
            <BarChart
              infected={globalData.TotalConfirmed}
              recovered={globalData.TotalRecovered}
              deaths={globalData.TotalDeaths}
              title='Overall Cases'
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={10}
            spacing={2}
            className={styles.sections}
            justify='center'
          >
            <LineChart history={history} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Global;
