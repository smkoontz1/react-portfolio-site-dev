import React, { Component } from 'react';
import Playlist from './Playlist';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    }

  }

  componentDidMount() {
    const key = 'AIzaSyDFJsYS_aqSf7Dbl9X0X6embcFOn_GKMn0';

    this.getPlaylists(key);

  }

  getPlaylists(key) {

    const channelId = 'UCJ6FpWZiFj2j8VGqJntRBgQ';
    var playlistsURL = 'https://www.googleapis.com/youtube/v3/playlists?';

    var playlistsParams = {
      part: 'snippet',
      channelId: channelId,
      maxResults: 25,
      key: key,
    };

    var playlistsQuery = Object.keys(playlistsParams)
                            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(playlistsParams[k]))
                            .join('&');

    playlistsURL = playlistsURL + playlistsQuery;

    var playlistData = [];

    fetch(playlistsURL)
      .then(result => result.json())
      .then(result => {

        playlistData = result.items;
        this.getPlaylistItems(key, playlistData);

      });

  }

  getPlaylistItems(key, playlistData) {

    playlistData.forEach((playlist, index) => {
      var playlistNum = index;
      var playlistId = playlist.id;
      var playlistName = playlist.snippet.title;

      var playlistItemsURL = 'https://www.googleapis.com/youtube/v3/playlistItems?';

      var playlistItemsParams = {
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 25,
        key: key,
      };

      var playlistItemsQuery = Object.keys(playlistItemsParams)
                              .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(playlistItemsParams[k]))
                              .join('&');

      playlistItemsURL = playlistItemsURL + playlistItemsQuery;

      var playlistItemsData = [];

      fetch(playlistItemsURL)
        .then(result => result.json())
        .then(result => {

          playlistItemsData = result.items;
          this.addPlaylistObj(playlistNum, playlistId, playlistName, playlistItemsData);

        });

    });

  }

  addPlaylistObj(playlistNum, playlistId, playlistName, playlistItemsData) {

    var videos = [];
    playlistItemsData.forEach((video, index) => {

      var videoDesc = video.snippet.description;
      if (videoDesc.length > 100) {
        videoDesc = videoDesc.substring(0, 99) + "...";
      }

      var videoObj = {
        videoId: video.snippet.resourceId.videoId,
        videoTitle: video.snippet.title,
        videoDesc: videoDesc,
      };
      videos.push(videoObj);
    });

    var playlistObj = {
      playlistNum: playlistNum,
      playlistId: playlistId,
      playlistName: playlistName,
      videos: videos,
    };

    this.setState({
      playlists: [...this.state.playlists, playlistObj],
    });

  }

  render() {

    const playlistComponents = this.state.playlists
      .sort((a, b) => a.playlistNum - b.playlistNum)
      .map((playlist, index) =>
        <Playlist
          key={playlist.playlistId}
          playlistName={playlist.playlistName}
          videos={playlist.videos}
        />
    );

    return(
      <div>
        <div>{playlistComponents}</div>
      </div>
    );

  }

}

export default Video;
