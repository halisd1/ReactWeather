var React = require('react');

var WeatherMessage = ({temp, cityname}) => {

  return(
    <div>
      <p>Weather in {cityname} is {temp} degrees!</p>
    </div>
  );
}

module.exports = WeatherMessage;
