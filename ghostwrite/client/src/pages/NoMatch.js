import React, { Component } from "react";
import Navbar from "./components/Navbar";


class NoMatch extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <h1>404: NoMatch Page:</h1>
            <h2>Route when user goes to a nonexistent page</h2>
            </div>
        )
    }
}

export default NoMatch;