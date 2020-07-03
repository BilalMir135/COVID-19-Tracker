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
