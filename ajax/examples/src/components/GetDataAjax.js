import React, { Component, useState, useEffect } from "react";
import $ from "jquery";
import { Card, Button, Container, Row, Col } from "react-bootstrap"



const GetDataAjax = () => {
    const [users, setUsers] = useState([])
    // Fetch Users:
    useEffect(() => {

        $.ajax("http://192.168.2.53:8080/packadistr/rest/rcusers/userlist/",
            {
                type: "GET",
                // async: false,
                success: (res) => setUsers(res)
            })

    })

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: [],
    //     }
    // }
    // componentDidMount() {

    //     $.ajax("http://192.168.2.53:8080/packadistr/rest/rcusers/userlist/",
    //         {
    //             type: "GET",
    //             // async: false,
    //             success: (res) => this.setState({ posts: res })
    //         })
    // }





    return (
        <>
            <h1> Hello</h1>
            <Container>
                {/* <Row className="justify-content-center mb-3">
                    <Button variant="outline-dark" className="w-50" onClick={() => {

                        $.ajax('http://192.168.2.53:8080/packadistr/rest/rcusers/insertuser/', {
                            type: 'POST',
                            data: {
                                myData: JSON.stringify({
                                    id: 100,
                                    emri: "Eri",
                                    email: "eri@gmail.com"
                                })
                            },
                            success: (res) => console.log(res)
                        })

                    }}>POST</Button>
                </Row> */}





                <Row>

                    {
                        users.map((user) => {
                            return (
                                <Col className="mb-4" key={user.cid}>
                                    <Card style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>{user.emri}</Card.Title>
                                            <Card.Title>{user.email}</Card.Title>
                                            <Card.Title>{user.username}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </>

    )
}


export default GetDataAjax