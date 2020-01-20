import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import FirebaseSaveUser from '../../services/FirebaseSaveUser'
import FirestoreSetUser from '../../services/FirestoreSetUser'


class EditUser extends Component {


    constructor(props) {
        super(props);
        this.state = props.user || {
            email: "",
            name: "",
            admin:false,
            home:""
        };
    }

    async HandleSubmit(e){
        e.preventDefault()
        if(this.state.email!=null & this.state.name!=null){
            FirestoreSetUser(this.state)
        }
    }

    HandleChange(e) {
        switch (e.target.id) {
                case 'User.Name':
                    this.setState({
                        name:e.target.value
                    })
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
                <Form.Group controlId="User.Name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"
                    defaultValue={this.props.user.name}
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
                        defaultValue={this.props.user.home}
                        onChange = {(e) => this.HandleChange(e)}
                        ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save user
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

export default EditUser
