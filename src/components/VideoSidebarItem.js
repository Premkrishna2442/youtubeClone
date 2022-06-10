import "./VideoItem.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoSidebarItem = ({ video, videos }) => {
  const navi = useNavigate();
  const playVideo = () => {
    navi("/video", { state: { id: { video }, videos: { videos } } });
  };
  // console.log(video)
  return (
    <div onClick={playVideo} className="video-item-side item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="sidecontent">
        <div className="header">{video.snippet.title}</div>
        <h4>{video.snippet.channelTitle}</h4>
        {/* <p>{video.snippet.description.substring(0, 100)}...</p> */}
      </div>
    </div>
  );
};

export default VideoSidebarItem;
