import React, { Component } from 'react';
import Placeholder from './Placeholder';
import PhotoSlider from './PhotoSlider';
import { digitalDesignImages, traditionalDesignImages } from '../js_databases/images.js';

class Design extends Component {

  render() {
    return(
      <div>
        <PhotoSlider photosTitle="Traditional Design" photos={traditionalDesignImages} />
        <PhotoSlider photosTitle="Digital Design" photos={digitalDesignImages} />
      </div>
    );
  }

}

export default Design;
