const fetchMyIP = require('./iss');
const fetchCoordsByIP = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('It worked! Returned IP:', ip);
  }
});

fetchCoordsByIP('198.84.190.172', (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('Data returned:', data);
  }
});