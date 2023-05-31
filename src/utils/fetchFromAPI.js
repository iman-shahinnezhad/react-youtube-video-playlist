import axios from 'axios';

export const BASE_URL = 'https://youtube-v38.p.rapidapi.com';

const options = {

  headers: {
    'X-RapidAPI-Key': '3c5306e32dmsh15dbfd71c2c9740p183893jsn3bce867bf3d4',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
