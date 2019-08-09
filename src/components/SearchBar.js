import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar