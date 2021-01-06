

import React, { Component } from "react";
import DogImage from "./components/dogImage"
import { Row, Col, Container } from "react-bootstrap"
import $ from 'jquery'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImages: [],
            posts: []
        }
    }

    componentDidMount() {

        // fetch("https://dog.ceo/api/breeds/image/random/3")
        //   .then(res => res.json())
        //   .then((data) => {
        //     this.setState({ dogImages: data.message })
        //     console.log("dogs", data)
        //   })
        $.ajax('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            type: 'GET',
            success: (res) =>
                this.setState({ posts: res })
        })
    }

    render() {
        const dogList = this.state.dogImages.map((image) => {
            return <DogImage url={image} />

        })
        return (
            <div>
                <h1> Dog Images</h1>
                { this.state.posts.map(({ userId, id, title }) => <p>{title}</p>)}
                <button onClick={() => {

                    $.ajax('https://jsonplaceholder.typicode.com/posts', {
                        type: 'POST',
                        data: {
                            myData: {
                                userId: 10,
                                id: 100,
                                title: "from Alinas computer",
                                body: "just a text"
                            }
                        },
                        success: (res) => console.log(res)
                    })

                }}>POST</button>
            </div >
        );
    }
}
export default App;