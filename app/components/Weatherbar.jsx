var React = require('react');

var Weatherbar = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var cityname = this.refs.cityname.value;

    if (cityname.length > 0){
      this.refs.cityname.value = '';
      this.props.onSearch(cityname);
    }
  },
  render: function(){
    return(

          <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="cityname" placeholder="Enter city name"/>
              <button>Get Weather</button>
            </form>
          </div>
    );
    }
});

module.exports = Weatherbar;
