const axios = require("axios");
module.exports = async () => {
  try {
    const response = await axios.get("http://localhost:8055/items/popular?access_token=admin");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};