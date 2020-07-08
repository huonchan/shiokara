import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //todo:いずれ消えてもらう
import * as serviceWorker from './serviceWorker';
import YouTube from 'react-youtube';

let urlParamStr = window.location.search.replace('?',"")//fixme:もっとマトモな処理方法を探せ
// https://hatolabo.com/programming/react-get-url-param
var defVideoId = 'XggYNGse84Q'
var rootUrl='http://localhost:3000/?'

//todo:別ファイルに分けろ。あと選択肢は外部ファイルか何かに定義しろ。
class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Music List'
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e,m) => {
    this.setState({
      title: 'a'
    })
  }

  inputChange = (e) =>
  {
    this.setState({
      title: e.target.value
    })
  }
  

  render() {

    const title = this.state.title;

    return (

      <div id ='Menu' class='container_items'>
        <p>Menu {title}</p>
        <p>
          <input
            type="text"
            value={title}
            onChange={this.inputChange}
          ></input>
        </p>
        <p><a href="http://localhost:3000/?tZbXHt3xPr8">バッハの旋律を夜に聴いたせいです</a></p>
        <p>G線状のアリア</p>
        <p>ぱわぱふOP</p>
        <p>Powerpuff Raves</p>
        <p>ムーンライト</p>
        <p>マイム</p>
        <p>
          <button onClick={this.handleClick} >
            {this.state.title}
          </button>
        </p>

      </div>
    )
  }
}

class Youtube extends React.Component {
  render() {
    const opts = {
      height: '50',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1, //相手側のサーバーに負荷をかけないよう、開発中は0にする事
        modestbranding:1,
        //start:47
        start:0
      }
    };

    
    //defVideoId = 'XggYNGse84Q';
    if( urlParamStr != '' ) 
    {
      console.log('urlParamStr:'+urlParamStr);
      defVideoId = urlParamStr ;
    }
 
    return ( 

      <div id ='movie' class='container_items'>
        <YouTube
          videoId={defVideoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


ReactDOM.render(
  <React.StrictMode>
    <div id='content_root' class ='container'>
      <Menu />
      <Youtube />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
