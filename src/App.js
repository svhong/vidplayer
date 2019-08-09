import React, { Component } from "react";
import SearchBar from "./components/SearchBar";


class App extends Component {

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;