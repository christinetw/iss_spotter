// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function(callback) {
  let url = 'https://api.ipify.org?format=json';
  return request(url);
}

/* 
 * Makes a request to freegeoip.app using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  let url = 'https://freegeoip.app/json/' + ip;
  return request(url);
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
 
const fetchISSFlyOverTimes = function(body) {
  const jsonData = JSON.parse(body);
  let url = `https://iss-pass.herokuapp.com/json/?lat=${jsonData.latitude}&lon=${jsonData.longitude}`;
  return request(url);
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };

