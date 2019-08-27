import axios from "axios";

const KEY = "AIzaSyBdp3LJexrXvHw9lDJgnugfj_MhecNrNak";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: "10",
        key: KEY
    }
})