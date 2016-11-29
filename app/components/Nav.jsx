var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

  var cityname = this.refs.cityname.value;
  var encodedCityname = encodeURIComponent(cityname);

  if (cityname.length > 0 && cityname.typeof === 'string')
    this.refs.cityname.value='';
    window.location.hash = '#/?location=' + encodedCityname;
  },

  render: function(){
      return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather Application</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
              <li>
                  <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li>
                    <input type="search" ref="cityname" placeholder="Enter a city name"/>
                  </li>
                  <li>
                    <input type="submit" className="button" value="Get Weather"/>
                  </li>
                </ul>
              </form>
          </div>
        </div>
      );
  }
});

module.exports = Nav;

var old = (
  <div>
  <h2>Nav Component</h2>
  </div>
);
