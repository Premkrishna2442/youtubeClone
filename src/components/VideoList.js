import React, { useState } from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, term, page }) => {
  
  // const [pages, setpages] = useState(0);

  const renderedList = videos
    .filter((video) => {
      if (term === "") {
        return video;
      } else if (video.snippet.title.includes(term)) {
        console.log(video.snippet.title);
        return video;
      }
    })
    .map((video) => {
      return (
        <div className="innervideoList">
          <VideoItem key={video.id.videoId} videos={videos} video={video} />
        </div>
      );
    });

  return <div className="renderlist">{renderedList}</div>;
};

export default VideoList;
