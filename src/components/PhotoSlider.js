import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../css/MediaSlider.css';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      currentModalIndex: 0,
      modalActive: false,
    }
  }

  nextModalImg = () => {
    var curIndex = this.state.currentModalIndex;
    var nextIndex = curIndex + 1;
    if (nextIndex > (this.state.photos.length - 1)) {
      nextIndex = 0;
    }

    this.setState({
      currentModalIndex: nextIndex,
    });
  }

  prevModalImg = () => {
    var curIndex = this.state.currentModalIndex;
    var nextIndex = curIndex - 1;
    if (nextIndex < 0) {
      nextIndex = (this.state.photos.length - 1);
    }

    this.setState({
      currentModalIndex: nextIndex,
    });
  }

  handleImgClick = index => {
    this.setState({
      currentModalIndex: index,
      modalActive: !this.state.modalActive,
    })
  }

  toggleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive,
    });
  }

  render() {
    const photos = this.state.photos.map((photo, index) =>
      <div className="photo-container">
        <img src={photo.src} onClick={() => this.handleImgClick(index)}/>
      </div>

    );

    if (this.props.photos.length <= 4) {
      var displayFourInfinite = false;
    } else {
      displayFourInfinite = true;
    }

    if (this.props.photos.length <= 3) {
      var displayThreeInfinite = false;
    } else {
      displayThreeInfinite = true;
    }

    if (this.props.photos.length <= 2) {
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
      <section className="section">
        <div className="container">
          <h1 className="title is-3">{this.props.photosTitle}</h1>
          <div className="slick-container">
            <Slider {...settings}>
              {photos}
            </Slider>
          </div>
          <div className={ this.state.modalActive ? "modal is-active" : "modal" }>
            <div className="modal-background" onClick={this.toggleModal}></div>
            <div className="modal-card">
              <div id="modal-image-title" className="modal-card-head">
                <div className="title is-4 has-text-white">
                  <p>{this.props.photosTitle}</p>
                </div>
              </div>
              <div id="modal-image-container" className="modal-card-body">
                <img src={this.state.photos[this.state.currentModalIndex].src} />
              </div>
              <div id="modal-image-buttons">
                <div className="modal-card-footer">
                  <div className="level">
                    <div className="level-left">
                      <a className="button" onClick={this.prevModalImg}>
                        <span className="icon is-small">
                          <i className="fas fa-chevron-left"></i>
                        </span>
                      </a>
                    </div>
                    <div className="level-item has-text-white has-text-weight-semibold is-size-5">
                      <p>
                        {this.state.currentModalIndex + 1} of {this.state.photos.length}
                      </p>
                    </div>
                    <div className="level-right">
                      <a className="button" onClick={this.nextModalImg}>
                        <span className="icon is-small">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="modal-close is-large" onClick={this.toggleModal} aria-label="close"></button>
          </div>
        </div>
      </section>
    );
  }

}

export default PhotoSlider;
