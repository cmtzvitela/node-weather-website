const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3f782054b24298481a5ae977f852bb18&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather forecast", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It's ${body.current.temperature}°C feeling like ${
          body.current.feelslike
        }°C. There's a ${body.current.precip * 100}% chance of rain with a humidity of ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
