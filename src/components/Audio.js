import React, { Component } from 'react';

class Audio extends Component {

  render() {
    return(
      <div>
        <section className="section">
          <div className="container">
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/588166755&color=%23311e14&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/584402157&color=%23311e14&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/584401689&color=%23311e14&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <article className="message is-dark">
              <div class="message-body">
                NOTE: SoundCloud is currently not allowing registration to use their API, so the tracks on this page were embedded
                manually. As such, this page may not include everything on my SoundCloud profile.
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

}

export default Audio;
