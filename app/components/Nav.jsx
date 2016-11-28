var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.PreventDefault();
    alert('Not Yet Wired Up!');
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
                    <input type="search" placeholder="Search Weather"/>
                  </li>
                  <li>
                    <input type="submit" className="button" value="Get Weather"></input>
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
