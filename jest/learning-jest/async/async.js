const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(results.data);
  return results.data;
};

module.exports = fetchData;

fetchData(1);
