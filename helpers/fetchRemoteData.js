const axios = require('axios');

const fetchData = async() => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1')
    return response.data;
  } catch {
    console.log('No data found');
    return {}
  }
}

module.exports = {
  fetchData
}