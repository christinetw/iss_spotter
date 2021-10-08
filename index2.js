
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then(body => fetchCoordsByIP(body))
  .then(body => fetchISSFlyOverTimes(body))
  .then(body => console.log(body))
