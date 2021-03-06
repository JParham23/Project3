import React from "react";
import YouTube from "react-youtube";

 
class Video extends React.Component {
    
  render() {
    const opts = {
      height: '370px',
      width: '100%',
      opacity: '0.5',
      playerVars:{
        list:'PLS8SDKQL0AEF7PMSsJlqnmoRpAl39haOE',
        listType: 'playlist',
        autoplay: 0,
        controls: 1,
        loop: 1
      }
      
    };
    
    return (
      <YouTube
        opts={opts}
        onReady={this._onReady}
      />
    );
};

onReady(event) {
    event.target.loadPlaylist();
    console.log(event.target);
}
};
  
export default Video;



