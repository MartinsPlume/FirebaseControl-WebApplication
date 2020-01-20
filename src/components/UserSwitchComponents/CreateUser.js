import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import FirebaseSaveUser from '../../services/FirebaseSaveUser'
import FirestoreSetUser from '../../services/FirestoreSetUser'


class CreateUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            admin:false,
            home:""
        };
        this.password=null
    }

    async HandleSubmit(e){
        e.preventDefault()
        if(this.state.email!=null &
            this.state.name!=null &
            this.password.length>5){
                if (FirebaseSaveUser(this.state.email,this.password)){
                    if (FirestoreSetUser(this.state)){
                        console.log("Double success!")
                    }
                }
                else {
                    console.log("Fail!")
                }
        }
    }

    HandleChange(e) {
        switch (e.target.id) {
                case 'User.Email':
                    this.setState({
                        email:e.target.value
                    })
                break;
                case 'User.Name':
                    this.setState({
                        name:e.target.value
                    })
                break;
                case 'User.Password':
                        this.password=e.target.value
                break;
                case 'User.Home':
                    this.setState({
                        home:e.target.value
                    })
                break;
            default:
                break;
      }
    }


    render() {
        return (
            <div>
                <Form onSubmit = {this.HandleSubmit.bind(this)}>
                <Form.Group controlId="User.Email">
                    <Form.Label>User E-mail</Form.Label>
                    <Form.Control type="email"
                    placeholder="Enter user Email"
                    onChange = {(e) => this.HandleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="User.Name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"
                    placeholder="Enter Name"
                    onChange = {(e) => this.HandleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="User.Password">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control type="password"
                    placeholder="Enter Password"
                    onChange = {(e) => this.HandleChange(e)}
                    />
                </Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Group controlId="User.Admin">
                    <BootstrapSwitchButton
                        size="lg"
                        disabled={true}
                        checked={false}
                        onlabel='Admin'
                        offlabel='User'
                        onChange={(checked: boolean) => {
                                this.setState({
                                    admin:{checked}
                                })
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="User.Home">
                        <Form.Label>Instructions for user</Form.Label>
                        <Form.Control as="textarea" rows="10"
                        onChange = {(e) => this.HandleChange(e)}
                        ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create User
                </Button>

                <Button onClick= {(e) => {
                    this.props.SendCloseUserSwitch()
                    this.props.sendFetchData()
                }
                }>Close</Button>
            </Form>
            </div>
        )
    }
}

export default CreateUser
