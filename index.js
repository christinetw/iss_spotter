const fetchMyIP = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('It worked! Returned IP:', ip);
  }
});