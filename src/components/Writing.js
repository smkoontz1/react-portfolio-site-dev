import React, { Component } from 'react';
import Placeholder from './Placeholder';
import flash1_tall_ones from '../assets/writing/creative_writing/flash1_tall_ones.pdf';
import flash2_music from '../assets/writing/creative_writing/flash2_music.pdf';
import poem1_reflection from '../assets/writing/creative_writing/poem1_reflection.pdf';
import poem2_carhenge from '../assets/writing/creative_writing/poem2_carhenge.pdf';
import '../css/writing.css';

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      clickedPDF: flash1_tall_ones,
    }
  }

  handleDocClick = (doc) => {
    this.setState({
      clickedPDF: doc,
    });
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive,
    });
  }

  render() {
    return(
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Flash Fiction</h1>
            <a className="title is-4" onClick={() => this.handleDocClick(flash1_tall_ones)}>Tall Ones</a>
            <br></br>
            <a className="title is-4" onClick={() => this.handleDocClick(flash2_music)}>Music</a>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-3">Poetry</h1>
            <a className="title is-4" onClick={() => this.handleDocClick(poem1_reflection)}>Reflection</a>
            <br></br>
            <a className="title is-4" onClick={() => this.handleDocClick(poem2_carhenge)}>Carhenge</a>
          </div>
        </section>
        <div className={ this.state.modalActive ? "modal is-active" : "modal" }>
          <div class="modal-background" onClick={this.toggleModal}></div>
          <div class="modal-content">
            <div className="pdf-container">
              <embed className="pdf-doc" src={this.state.clickedPDF} type="application/pdf" title="TEST"/>
            </div>
          </div>
          <button class="modal-close is-large" onClick={this.toggleModal} aria-label="close"></button>
        </div>
      </div>
    );
  }

}

export default Writing;
