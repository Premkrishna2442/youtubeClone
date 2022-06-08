import axios from "axios";

const KEY = "AIzaSyAb4WNOzl3_ggQc-8kou55n6U3cxhhPR1w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
  },
});