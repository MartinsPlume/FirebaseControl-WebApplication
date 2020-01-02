import React from 'react'
import Form from 'react-bootstrap/Form'

const ViewExercise = ({viewExercise}) => {
    console.log(viewExercise)
    return (
        <div>
            <Form>
                <Form.Group controlId="ExerciseForm.title">
                    <Form.Label>Exercise Title</Form.Label>
                    <Form.Control type="text"
                    defaultValue={viewExercise.title}
                    />
                </Form.Group>
                <Form.Group controlId="ExerciseForm.ControlSelectType">
                    <Form.Label>Select Exercise Type</Form.Label>
                    <Form.Control as="select"
                    defaultValue={viewExercise.type}
                    >
                    <option>Back</option>
                    <option>Legs</option>
                    <option>Chest</option>
                    <option>Shoulders</option>
                    <option>Arms</option>
                    <option>Core</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="ExerciseForm.ControlShortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control as="textarea" rows="2"
                    defaultValue={viewExercise.shortDescription}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="ExerciseForm.Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="5"
                    defaultValue={viewExercise.description}
                    ></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ViewExercise
