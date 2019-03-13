const axios = require("axios");

module.exports = {
  createBlock: (blockData) => {
    return axios.post('/read/testBlock', blockData);
  },
  createUser: (userData) => {
    return axios.post('/register', userData);
  }
}