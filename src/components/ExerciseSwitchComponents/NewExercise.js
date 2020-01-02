import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FirestoreSetExercise from '../../services/FirestoreSetExercise'
import Files from 'react-files'
import { Button } from 'react-bootstrap';
import ImageUploadToFirebase from '../../services/ImageUploadToFirebase'

class NewExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: "Back",
            shortDescription:"",
            description:"",
            exerciseImage:""
        };
        this.image = null
    }

    HandleSubmit(e) {

        e.preventDefault()
        ImageUploadToFirebase.uploadImageToFirebaseStorage(this.image)
            .then(res => {
                console.log(res.url)
                this.setState({
                exerciseImage : res.url
                })
                this.setState(this.state)
                console.log(this.state)
                })
            .catch(err => console.error(err))
           .finally(() => FirestoreSetExercise(this.state))
        
        // close editing field
        //this.props.SendCloseExerciseSwitch()
        }
        
    HandleChange(e) {
        switch (e.target.id) {
                case 'ExerciseNewForm.title':
                this.setState({
                    title:e.target.value
                    })
                break;
            
                case 'ExerciseNewForm.ControlSelectType':
                this.setState({
                    type:e.target.value
                })
                break;
                
                case 'ExerciseNewForm.ControlShortDescription':
                    this.setState({
                        shortDescription:e.target.value
                    })
                break;
                
                case 'ExerciseNewForm.ControlDescription':
                    this.setState({
                        description:e.target.value
                    })
                break;
          
            default:
                break;
      }
    }

    onFilesChange(files) {
        this.image = files[0]
        this.props.SendHandlePreview(files[0])
    }
     
    onFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    render() {
        return (
            <div>
                <Form onSubmit = {this.HandleSubmit.bind(this)}>
                    <Form.Group controlId="ExerciseNewForm.title">
                        <Form.Label>Exercise Title</Form.Label>
                        <Form.Control type="text"
                        onChange = {(e) => this.HandleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="ExerciseNewForm.ControlSelectType">
                        <Form.Label>Select Exercise Type</Form.Label>
                        <Form.Control as="select"
                        value = 'Back'
                        onChange = {(e) => this.HandleChange(e)}
                        >
                        <option>Back</option>
                        <option>Legs</option>
                        <option>Chest</option>
                        <option>Shoulders</option>
                        <option>Arms</option>
                        <option>Core</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ExerciseNewForm.ControlShortDescription">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control as="textarea" rows="2"
                        onChange = {(e) => this.HandleChange(e)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ExerciseNewForm.ControlDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="5"
                        onChange = {(e) => this.HandleChange(e)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Files
                            className='files-dropzone'
                            onChange={this.onFilesChange.bind(this)}
                            onError={this.onFilesError}
                            accepts={['image/*']}
                            maxFiles={1}
                            maxFileSize={5000000}
                            minFileSize={0}
                            clickable
                        >
                            Drop picture here or click to upload
                        </Files>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save changes
                    </Button>
                </Form>
            </div>
        )
    }
}
export default NewExercise