import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {
  fetchCountries,
  fetchCountryFlag,
  fetchHistory,
  fetchCountriesData,
} from '../../api';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from '@material-ui/core';
import styles from './Country.module.css';
import LineChart from '../Charts/LineChart';
import Cards from '../Cards/Cards';
import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Pakistan');
  const [countryFlag, setCountryFlag] = useState('');
  const [countryData, setCountryData] = useState({});
  const [history, sethistory] = useState([]);

  const handleCountryChange = async (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    const fetchCountryFlagAPI = async () => {
      setCountryFlag(await fetchCountryFlag(selectedCountry));
      setCountryData(await fetchCountriesData(selectedCountry));
      sethistory(await fetchHistory(selectedCountry));
    };

    fetchCountryFlagAPI();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchCountriesAPI();
  }, []);

  if (!countries || !history || !countryData || !countryFlag) {
    return (
      <div className='spinner'>
        <CircularProgress />;
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.container}>
          <img
            src={countryFlag}
            alt='country flag'
            className={styles.countryFlag}
          />

          <Typography variant='h2' className={styles.countryName}>
            {selectedCountry}
          </Typography>
        </div>
        <Grid container item justify='center'>
          <Grid
            container
            item
            xs={10}
            justify='center'
            className={styles.sections}
            spacing={1}
          >
            <FormControl variant='outlined' className={styles.select}>
              <InputLabel>Choose Country</InputLabel>
              <Select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e)}
                label='Choose Country'
              >
                <MenuItem value='Pakistan'>Pakistan</MenuItem>
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={10}
            spacing={1}
            className={styles.sections}
            justify='center'
          >
            <Cards data={countryData} />
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
                infected={countryData.TotalConfirmed}
                recovered={countryData.TotalRecovered}
                deaths={countryData.TotalDeaths}
                title='Overall Cases'
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <DoughnutChart
                infected={countryData.NewConfirmed}
                recovered={countryData.NewRecovered}
                deaths={countryData.NewDeaths}
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
              infected={countryData.TotalConfirmed}
              recovered={countryData.TotalRecovered}
              deaths={countryData.TotalDeaths}
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

export default Country;
