import axios from "axios";

const KEY = "AIzaSyAEtWVPaR_-ji11GY7_fSIizXYVAxqUsqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    // maxResults: 2,
    key: KEY,
  },
});