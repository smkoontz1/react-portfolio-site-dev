import React, { Component } from 'react';
import VideoSlider from './VideoSlider';

class Playlist extends Component {
  render() {

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">{this.props.playlistName}</h1>
          <VideoSlider
            key={this.props.playlistName + "-slider"}
            videos={this.props.videos}
            playlistName={this.props.playlistName}
          />
        </div>
      </section>
    );
  }

}

export default Playlist;
