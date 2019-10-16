import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import fbApp from "../FirebaseConfig"

export default class NavBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             links: props.links
        }
    }
    
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                        <Navbar.Brand href={this.state.home}>JuliFit</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {this.state.links}
                            </Nav>
                        </Navbar.Collapse>
                        <button onClick={() => fbApp.auth().signOut()}>Sign out</button>
                </Navbar>
            </div>
        )
    }
}
