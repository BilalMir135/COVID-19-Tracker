import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import InfectedImage from '../assets/infected.png';
import RecoveredImage from '../assets/recovered.png';
import DeathImage from '../assets/death.png';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const content = (
  title,
  imgSrc,
  numType,
  totalCases = 0,
  newCases = 0,
  date
) => {
  return (
    <React.Fragment>
      <Grid item xs={4} className={styles.cardImage}>
        <img src={imgSrc} alt='virus' />
      </Grid>
      <Grid item xs={8} sm={8} className={styles.cardText}>
        <Typography>{title}</Typography>
        <Typography variant='h4' className={numType}>
          <CountUp start={0} end={totalCases} duration={2.5} separator=',' />
        </Typography>
        <Typography color='textSecondary'>
          {new Date(date).toDateString()}
        </Typography>
        <Typography color='textSecondary'>
          Today: (+
          <CountUp start={0} end={newCases} duration={2.5} separator=',' />)
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

const Cards = ({
  data: {
    Date,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  },
}) => {
  return (
    <React.Fragment>
      <Grid
        container
        item
        xs={12}
        lg={4}
        component={Card}
        spacing={2}
        className={cx(styles.root, styles.infected)}
      >
        {content(
          'Infected',
          InfectedImage,
          styles.infectedNum,
          TotalConfirmed,
          NewConfirmed,
          Date
        )}
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={4}
        component={Card}
        spacing={2}
        className={cx(styles.root, styles.recovered)}
      >
        {content(
          'Recovered',
          RecoveredImage,
          styles.recoveredNum,
          TotalRecovered,
          NewRecovered,
          Date
        )}
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={4}
        component={Card}
        spacing={2}
        className={cx(styles.root, styles.death)}
      >
        {content(
          'Deaths',
          DeathImage,
          styles.deathNum,
          TotalDeaths,
          NewDeaths,
          Date
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Cards;
