import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import styles from './Global.module.css';
import Cards from '../Cards';
import { fecthGlobalData } from '../../api';
import CircularProgress from '@material-ui/core/CircularProgress';

const Global = () => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    const fecthapi = async () => {
      setGlobalData(await fecthGlobalData());
    };

    fecthapi();
  }, []);

  if (!globalData) {
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
            className={styles.cards}
            justify='center'
          >
            <Cards data={globalData} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Global;
