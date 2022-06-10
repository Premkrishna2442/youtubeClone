import React from "react";
import { useLocation } from "react-router-dom";
import VideoList from "./VideoList";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import VideoSideBar from "./VideoSideBar";
// import { makeStyles } from '@mui/material';

// const useStyle=makeStyles({
//   cancel:{
//    backgroundColor:'red'
//   }
// })

const VideoDetail = () => {
  const id = useLocation();
  const video = id.state.id;
  const videos = id.state.videos.videos;

  console.log(videos);
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.video.id.videoId}`;

  return (
    <div className="description">
      <div className="cancel">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "x-large",
          }}
        >
          <p> x</p>
        </Link>
      </div>
      <div className="right">
        <div className="bottomDes">
          <div className="fixed">
        <div>
          <iframe className="iframe" title="video player" src={videoSrc} />
        </div>
        <div >
          <h4 className="ui header">{video.video.snippet.title}</h4>
          <h3 className="channel">
            <Avatar
              sx={{ width: 40, height: 40, padding: "5px", margin: "5px" }}
            >
              {video.video.snippet.channelTitle.substring(0, 1)}
            </Avatar>
            {video.video.snippet.channelTitle}
          </h3>
          <p>{video.video.snippet.description}</p>
        </div>
        </div>
        </div>
        <VideoSideBar videos={videos} term={""} />
      </div>
    </div>
  );
};

export default VideoDetail;
