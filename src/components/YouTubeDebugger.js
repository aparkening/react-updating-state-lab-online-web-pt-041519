import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  // Set initial state
  constructor(props) {
    super()
	  this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
	  }
  }

  // Change bitrate to 12
  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }      
    })
  }

  // Change resolution to 720p
  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }      
    })
  }

  render() {
    return (
      <div>
        {this.state.settings.bitrate} - &nbsp;
        <button 
          className="bitrate"
          onClick={this.handleBitClick}
        >
          Update bitrate
        </button>
        <br />
        {this.state.settings.video.resolution} - &nbsp;
        <button 
          className="resolution"
          onClick={this.handleResClick}
        >
          Update resolution
        </button>
      </div>
    )
  }
}
