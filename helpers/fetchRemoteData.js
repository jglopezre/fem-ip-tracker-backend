const axios = require('axios');

const fetchData = async() => {
  const response = await axios.get('https://reqres.in/api/users?page=1')
  return response.data;
}

module.exports = {
  fetchData
}