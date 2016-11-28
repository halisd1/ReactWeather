var React = require('react');

var WeatherMessage = ({temp, cityname}) => {

  return(
    <div>
      <h3 className="text-center">Weather in {cityname} is {temp} degrees!</h3>
    </div>
  );
}

module.exports = WeatherMessage;
