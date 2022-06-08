import './VideoItem.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoItem = ({ video ,videos}) => {
  const navi=useNavigate()
  const playVideo=()=>{
      navi('/video',{state:{id:{video},videos:{videos}}})
  }
  console.log(video)
  return (
    <div onClick={playVideo} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;