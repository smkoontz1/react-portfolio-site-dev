import React, { Component } from 'react';
import Slider from 'react-slick';
import '../css/VideoSlider.css';

class VideoSlider extends Component {
  render() {

    const youtubeURL = "https://www.youtube.com/embed/";

    const videos = this.props.videos.map((video, index) =>
      <div>
        <div className="video-container">
          <iframe
            src={youtubeURL + video.videoId}
            title={video.videoTitle}
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="video-info">
          <p className="title is-6">{video.videoTitle}</p>
          <p className="subtitle is-6">{video.videoDesc}</p>
        </div>
      </div>

    );

    if (this.props.videos.length <= 4) {
      var displayFourInfinite = false;
    } else {
      displayFourInfinite = true;
    }

    if (this.props.videos.length <= 3) {
      var displayThreeInfinite = false;
    } else {
      displayThreeInfinite = true;
    }

    if (this.props.videos.length <= 2) {
      var displayTwoInfinite = false;
    } else {
      displayTwoInfinite = true;
    }

    var settings = {
      dots: true,
      infinite: displayFourInfinite,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            infinite: displayThreeInfinite,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            swipeToSlide: true,
            infinite: displayTwoInfinite,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: true,
          }
        }
      ],
    };
    return (
      <div className="slick-container">
        <Slider key={this.props.playlistName + "-slider-object"} {...settings}>
          {videos}
        </Slider>
      </div>
    );
  }

}

export default VideoSlider;
