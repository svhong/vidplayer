import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList"

import youtube from "./apis/youtube";


class App extends Component {

    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;