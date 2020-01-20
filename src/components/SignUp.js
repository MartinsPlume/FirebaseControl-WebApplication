import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import FirebaseSaveUser from '../services/FirebaseSaveUser'
import FirestoreSetUser from '../services/FirestoreSetUser'


function SignUp(sendClose) {

    
    const [email,setEmail] = React.useState()
    const [name,setName] = React.useState()
    const [password,setPassword] = React.useState()
    const [admin, setAdmin] = React.useState(false)
    const [home,setHome] = React.useState()

    async function HandleSubmit(e){
        e.preventDefault()
        if(email!=null &
            name!=null &
            password.length>5){
                if (FirebaseSaveUser(email,password)){
                    if (FirestoreSetUser(email,name,admin,home)){
                        console.log("Double success!")
                    }
                }
                else {
                    console.log("Fail!")
                }
        }
    }



    function HandleChange(e) {
        switch (e.target.id) {
                case 'User.Email':
                    setEmail(e.target.value)
                break;
                case 'User.Name':
                    setName(e.target.value)
                break;
                case 'User.Password':
                    setPassword(e.target.value)
                break;
                case 'User.Home':
                    setHome(e.target.value)
                break;
            default:
                break;
      }
    }

    return (
        <div>
            <Form onSubmit = {HandleSubmit}>
                <Form.Group controlId="User.Email">
                    <Form.Label>User E-mail</Form.Label>
                    <Form.Control type="email"
                    placeholder="Enter user Email"
                    onChange = {(e) => HandleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="User.Name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"
                    placeholder="Enter Name"
                    onChange = {(e) => HandleChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="User.Password">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control type="password"
                    placeholder="Enter Password"
                    onChange = {(e) => HandleChange(e)}
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
                            setAdmin(checked)
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="User.Home">
                        <Form.Label>Instructions for user</Form.Label>
                        <Form.Control as="textarea" rows="10"
                        onChange = {(e) => HandleChange(e)}
                        ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create User
                </Button>
            </Form>
        </div>
    )
}

export default SignUp