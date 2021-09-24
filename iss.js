const request = require("request");

const fetchMyIP = function(callback) {
  let url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);

    callback(null, data.ip);
  });
};
const fetchCoordsByIP = function(ip, callback) {
  let url = 'https://freegeoip.app/json/' + ip;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    let data = {};
    const obj = JSON.parse(body);
    data.latitude = obj.latitude;
    data.longitude = obj.longitude;

    callback(null, data);
  });
};

module.exports = fetchMyIP;
module.exports = fetchCoordsByIP;