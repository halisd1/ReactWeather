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
              <input type="search" ref="cityname" placeholder="Enter city name"/>
              <button className="expanded hollow button">Get Weather</button>
            </form>
          </div>
    );
    }
});

module.exports = Weatherbar;
