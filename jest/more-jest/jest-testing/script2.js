const axios = require("axios");
const fetch = require("node-fetch");
const url = "https://pokeapi.co/api/v2/pokemon";

//example of dependency injection

const getPeople = async (dep, url) => {
  try {
    const response = await dep(url);
    const data = await response.json();
    return { count: data.count, results: data.results };
  } catch (error) {
    console.log(error);
  }
};
getPeople(fetch, url);

module.exports = { getPeople };
