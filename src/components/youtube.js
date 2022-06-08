import axios from "axios";

const KEY = "AIzaSyB9lJliPom1CMPtv11cTVE4tun4tYxVouk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 100,
    key: KEY,
  },
});