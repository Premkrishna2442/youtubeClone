import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoList from './VideoList';
const VideoDetail = () => {
  const id=useLocation()
  const video=id.state.id
  const videos=id.state.videos.videos
  console.log(videos)
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.video.snippet.title}</h4>
        <p>{video.video.snippet.description}</p>
      </div>
      <VideoList videos={videos}/>
    </div>
  );
};

export default VideoDetail;