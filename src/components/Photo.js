import React, { Component } from 'react';
import Placeholder from './Placeholder';
import PhotoSlider from './PhotoSlider';
import { colorNightImages, mahoneyDormancyImages } from '../js_databases/images.js';

class Photo extends Component {

  render() {

    return(
      <div>
        <PhotoSlider photosTitle="Color Night Photography" photos={colorNightImages} />
        <PhotoSlider photosTitle="Dormancy (Mahoney State Park)" photos={mahoneyDormancyImages} />
      </div>
    );
  }

}

export default Photo;
