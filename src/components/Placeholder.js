import React, { Component } from 'react';

class Placeholder extends Component {
  render() {

    return(
      <section className="section">
        <div className="container">
          <article className="message is-dark">
            <div class="message-body">
              Welcome to the {this.props.pageName} page! This site is currently in development, but for now you can go check out the VIDEO page!
            </div>
          </article>
        </div>
      </section>
    );
  }

}

export default Placeholder;
