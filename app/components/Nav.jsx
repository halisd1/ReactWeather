var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) =>{
  return(
    <div>
    <h2>Nav Component</h2>
    <IndexLink to='/'>Get Weather</IndexLink>
    <Link to='/Examples'>Examples</Link>
    <Link to='/About'>About</Link>
    </div>
  );
}

module.exports = Nav;
