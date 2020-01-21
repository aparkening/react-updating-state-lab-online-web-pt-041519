import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  // Set initial state
  constructor(props) {
    super()
	  this.state = {
	    timesClicked: 0
	  }
  }
  // Change color to #333
  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
            {this.state.timesClicked}
        </button>
      </div>
    )
  }
}
