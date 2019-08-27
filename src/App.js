import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail";

import youtube from "./apis/youtube";

import "./components/VideoItem.css";


class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    }

    onVideoSelect = (video) => {
        console.log(video.snippet)
        this.setState({ selectedVideo: video });
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App;