import axios from 'axios';

export const fecthGlobalData = async () => {
  try {
    const response = await axios.get('https://api.covid19api.com/summary');
    const {
      data: { Global },
    } = response;
    Global['Date'] = response.data.Countries[0].Date;
    return Global;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesData = async (countryName) => {
  try {
    const {
      data: { Countries },
    } = await axios.get('https://api.covid19api.com/summary');
    return Countries.find((country) => country.Country === countryName);
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistory = async (country) => {
  let url = 'https://kustom.radio-canada.ca/coronavirus/world';
  if (country) {
    url = url.replace('world', country.toLowerCase());
    url = url.replace(/ /g, '-');
  }
  try {
    const {
      data: [data],
    } = await axios.get(url);
    return data.History.reverse();
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get('https://covid19.mathdro.id/api/countries');
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryFlag = async (country) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    );
    return data[0].flag;
  } catch (error) {
    console.log(error);
  }
};
