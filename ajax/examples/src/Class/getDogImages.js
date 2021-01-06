
import React, { useState, useEffect } from "react";
import axios from "axios";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImages: []
        }
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(res => res.json())
        console.log(res.json())
    }


    render() {
        return (
            <div className="App">
                <h1> Dog Images</h1>
            </div>
        );
    }
}
export default App;