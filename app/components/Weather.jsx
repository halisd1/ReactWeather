var React = require('react');
var Weatherbar = require('Weatherbar');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
    }
  },
  handleSearch: function(cityname){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(cityname).then(function(temp){
      that.setState({
          cityname: cityname,
          temp: temp,
          isLoading: false
        });
    }, function(errorMessage){
      that.setState({isLoading: false});
        alert(errorMessage);
    });
  },

  render: function(){
    var cityname = this.state.cityname;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage (){
        if (isLoading){
          return <h3>Fetching Weather...</h3>;
        } else if (temp && location){
          return <WeatherMessage cityname={cityname} temp={temp}/>;
        }
    }

    return(
        <div>
          <h1>Get Weather</h1>
          <Weatherbar onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    )
  }
});

module.exports = Weather;
