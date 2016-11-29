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
        errorMessage: e.message,
        cityname: undefined,
        temp: undefined,
      });
        alert(errorMessage);
    });
  },

  componentDidMount: function (){
    var cityname = this.props.location.query.location;

    this.setState({
      cityname: cityname
    });

    if (cityname && cityname.length > 0)
    this.handleSearch(cityname);
    window.location.hash = '#/';
  },

  componentWillReceiveProps: function (newProps){
    var cityname = newProps.location.query.location;

    if (cityname.length > 0)
    this.handleSearch(cityname);
    window.location.hash = '#/';
  },

  render: function(){
    var cityname = this.state.cityname;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

    function renderMessage (){
        if (isLoading){
          return <h3 className="text-center">Fetching Weather...</h3>;
        } else if (temp && cityname){
          return <WeatherMessage cityname={cityname} temp={temp}/>;
        }
    }

    function renderError (){  // renderError
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
