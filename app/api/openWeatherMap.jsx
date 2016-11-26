var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=573a2a9447d589043e2d5c45c9c07838&units=imperial';

module.exports = {
  getTemp: function (cityname){
    var encodedLocation = encodeURIComponent(cityname);
    console.log('location: ' + encodedLocation);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message){
        throw new Error('Unable to Fetch Weather');
      } else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error('Unable to Fetch Weather');

    });
  }
}
