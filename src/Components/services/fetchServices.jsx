import axios from 'axios';

const fetchServices = async (url) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchServices;
