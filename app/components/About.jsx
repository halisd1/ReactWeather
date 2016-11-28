var React = require('react');

var About = (props) => {
  return(
    <div className = "callout primary large page-title">
      <h2>About Author,</h2>
      <p>"Here the author is trying to learn CSS and React JS. Let's wish him luck."</p>
      <p>Lets revisit this page in November 2017 and see where he is.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> This is the API used to search weather by city.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
