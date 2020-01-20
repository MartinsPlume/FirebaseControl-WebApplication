import React from 'react'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const UserTable = ({SendHandleEdit,SendHandleDelete,users}) => {
    
    function RenderTableData(){
        return users.map((user) => {
            const {email, name} = user
            return(
            <tr key={email}>
                <td>{email}</td>
                <td>{name}</td>
                <td>
                    <Button onClick= {(e) => SendHandleEdit(email)} variant="dark">
                        Edit
                    </Button>
                </td>
            </tr>
            )
        });
    }

    return (
        <div>
            <Table  striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderTableData()}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable