const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('It worked! Returned IP:', ip);
  }
});


fetchCoordsByIP('198.84.190.172', function(error, data)  {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('Data returned:', data);
  }
});

fetchISSFlyOverTimes({ latitude: 43.6547, longitude: -79.3623 }, (error,data) => {
  if (error) {
    console.log("It didn't work!", error);
  }  else {
    console.log('Data returned:', data);
  }
});
*/

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});