var React = require('react');
var Weatherbar = require('Weatherbar');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
    }
  },
  handleSearch: function(cityname){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(cityname).then(function(temp){
      that.setState({
          cityname: cityname,
          temp: temp,
          isLoading: false
        });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
        alert(errorMessage);
    });
  },

  render: function(){
    var cityname = this.state.cityname;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

    function renderMessage (){
        if (isLoading){
          return <h3 className="text-center">Fetching Weather...</h3>;
        } else if (temp && location){
          return <WeatherMessage cityname={cityname} temp={temp}/>;
        }
    }

    function renderError (){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
        <div>
          <h1 className="text-center page-title">Get Weather</h1>
          <Weatherbar onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
    )
  }
});

module.exports = Weather;
