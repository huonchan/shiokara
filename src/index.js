import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import YouTube from 'react-youtube';


class Menu extends React.Component {
  render() {
    return (
      <div id ='Menu>'>
        <p>Menu Component</p>
      </div>
    )
  }
}

class Movie extends React.Component {
  render() {
    return (
      <div>
        <p>Movie Component</p>
      </div>
    )
  }
}


class Youtube extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="KSC94cDM85s"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class Content extends React.Component {

}


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Movie />
    <Youtube />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
