var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    }
  },
  onUpdateUser: function() {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser: function() {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo' + this.state.username);
    }
  },

  render: function(){
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1> HEADERERERE </h1>
      <div className="col-sm-12">
        <form onSubmit={this.onSubmitUser}>
          <div className='form-group'>
            <input className='form-control' placeHolder='Github Username' type='text'
              onChange={this.onUpdateUser}
              value={this.state.username} />
          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button className='btn btn-block btn-success' type='submit' >
              Continue
            </button>
          </div>
        </form>
      </div>
        
    )
  }
})


module.exports = PromptContainer;