import React, { Component } from "react";
import Navbar from "./components/Navbar";


class TextEditor extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <h1>This is the TextEditor Page:</h1>
            <h3>Once a user clicks an incomplete story from the BrowsePage, they are taken here to add their contribution.</h3>
            </div>
        )
    }
}

export default TextEditor;