import React, { Component } from "react";
import Navbar from "./components/Navbar";


class ReadDetail extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <h1>This is the ReadDetail Page:</h1>
            <h3>Page to read individual stories that have been completed</h3>
            </div>
        )
    }
}

export default ReadDetail;