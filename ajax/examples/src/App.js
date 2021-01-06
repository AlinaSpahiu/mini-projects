
import React, { Component } from "react";
import DogImage from "./components/dogImage"
import { Row, Col, Container } from "react-bootstrap"
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: [],
      users: [],
      value: '',
      result: { email: '', id: '', name: '', phone: '', username: '' }
    }
  }

  componentDidMount() {

    // fetch("https://dog.ceo/api/breeds/image/random/3")
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ dogImages: data.message })
    //     console.log("dogs", data)
    //   })

    //https://jsonplaceholder.typicode.com/users

    $.ajax("https://jsonplaceholder.typicode.com/users",
      {

        success: (res) => this.setState({ users: res })
      })


  }

  render() {

    const dogList = this.state.dogImages.map((image) => {
      return <DogImage url={image} />
    })
    const { email, id, name, phone, username } = this.state.result
    return (
      <>
        <Container>
          <h1>Search result</h1> <br /><br />
          <div>Email : {email}</div><br /><br />
          <div>ID : {id}</div><br /><br />
          <div>Username : {username}</div><br /><br />
          <div>Name :  {name}</div><br /><br />
          <div>Phone : {phone}</div><br /><br />
          Email: <input type="email" onChange={(e) => { this.setState({ value: e.target.value }) }} /> <br /><br />
          {/* Name <input type="text"
            onChange={(e) => this.state.posts.filter((post) => { return  })} 
          />
*/}
          <button onClick={() => { this.setState({ result: this.state.users.find(user => user.email === this.state.value) }) }}>Search</button>

        </Container>
      </>
    );
  }
}
export default App;