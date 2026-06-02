import axios from 'axios';

export const fetchServices = async (url) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchData = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});
