var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  render: function(){
    return (
      <div> 
        Hello from Home 
        <Link to='/playerOne'>
          {this.props.children}
        </Link>

      </div>

    )
  }
})


module.exports = Home;