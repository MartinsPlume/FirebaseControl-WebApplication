import React from 'react'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const ExerciseTable = ({SendHandleEdit,SendHandleDelete,SendHandleView,exercises}) => {
    
    function RenderTableData(){
        return exercises.map((exercise) => {
            const {title, type, shortDescription, id} = exercise
            return(
            <tr key={title}>
                <td>{title}</td>
                <td>{type}</td>
                <td>{shortDescription}</td>
                <td>
                    <Button onClick= {(e) => SendHandleEdit(id)} variant="dark">
                        Edit
                    </Button>
                </td>
                <td>
                    <Button  onClick={(e) => SendHandleDelete(id)} variant="dark">
                        Delete
                    </Button>
                </td>
                <td>
                    <Button onClick= {(e) => SendHandleView(id)} variant="dark">
                        View
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
                        <th>Exercise Title</th>
                        <th>Type</th>
                        <th>Short Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderTableData()}
                </tbody>
            </Table>
        </div>
    )
}

export default ExerciseTable
