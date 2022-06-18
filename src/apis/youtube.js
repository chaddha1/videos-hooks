import axios from "axios";

const KEY = "AIzaSyBdS1x62v31c9bG9r20GkKSHKeyIkZ6-bo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type : 'video',
    maxResults: 5,
    key: KEY,
  },
});
