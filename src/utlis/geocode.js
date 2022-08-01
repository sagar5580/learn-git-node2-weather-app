const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=7b4dc32f89bad72bb4a95a131e85c909&query=${address}`;

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('unable to connect to location services!', undefined);
    } else if (body.data.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
