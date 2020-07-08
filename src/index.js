import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //todo:いずれ消えてもらう
import * as serviceWorker from './serviceWorker';
import YouTube from 'react-youtube';

let urlParamStr = window.location.search.replace('?',"")//fixme:もっとマトモな処理方法を探せ
// https://hatolabo.com/programming/react-get-url-param
var defVideoId = '再生しないというより、エラーにして一旦止める'//fixme:クソみたいなhack
var rootUrl='http://localhost:3000/?'

class ImageChara extends React.Component {

  render(){
    return (
      <img src={`${process.env.PUBLIC_URL}/image.png`} width="40%" height="40%"/>
    );
  }

}

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
        <p><h2>【{title}】</h2></p>
        <p>
          <input
            type="text"
            value={title}
            onChange={this.inputChange}
          ></input>
        </p>
        <p><a href="http://localhost:3000/?tZbXHt3xPr8">バッハの旋律を夜に聴いたせいです</a></p>
        <p><a href="http://localhost:3000/?vS6wzjpCvec">アルクアラウンド</a></p>
        <p><a href="http://localhost:3000/?_aqs6HrGroM">スローモーション</a></p>
        <p><a href="http://localhost:3000/?thQWqRDZj7E">G線状のアリア</a></p>
        <p>ぱわぱふOP</p>
        <p><a href="http://localhost:3000/?NNBEx72qBRI">Powerpuff Raves</a></p>
        <p><a href="http://localhost:3000/?N39glrfql0I">Monster Dance</a></p>
        <p><a href="http://localhost:3000/?5oELB7zwc8Q">Hello Fixer</a></p>
        <p>ムーンライト</p>
        <p>マイム</p>
        <p><a href="http://localhost:3000/?epfPe2U_2Xk">寿司食べたい</a></p>
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
      width: '240',
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
    //event.target.pauseVideo(); #
  }
}


ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>☀<a href="http://localhost:3000/">SunFlower Player</a>☽</h1> このエディタは主にオフィスで誤解を受ける事なく、Youtubeの「音声」だけを楽しむために特化したSPAのプレイヤーです
    </div>
    <div id='content_root' class ='container'>
      <ImageChara />
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
