import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import coronaVirus from '../../assets/coronavirus.png';
import Menu from './Menu';
import NavButtons from './NavButtons';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className='appBar'>
      <Toolbar>
        <img src={coronaVirus} width='50px' height='50px' alt='corona' />
        <Typography variant='h6' className={classes.title}>
          COVID-19 TRACKER
        </Typography>
        {window.screen.width >= 700 ? <NavButtons /> : <Menu />}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
