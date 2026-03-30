import axios from 'axios';

const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return null;
  }
};

export default fetchData;
