import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer className='footer'>
      <Grid container justify='center'>
        <Grid container item xs={12} justify='center'>
          <Grid item xs={10} md={4}>
            <Typography variant='h5' gutterBottom>
              COVID-19
            </Typography>
            <Typography variant='body1' className='covidText'>
              COVID-19 affects different people in different ways. Most infected
              people will develop mild to moderate illness and recover without
              hospitalization.
            </Typography>
          </Grid>
          <Grid item xs={false} md={6}></Grid>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h6' align='center' gutterBottom>
            Designed & Developed by Bilal Mir
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
