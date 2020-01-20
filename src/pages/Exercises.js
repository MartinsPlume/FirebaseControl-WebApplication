import React from 'react';
import '@firebase/firestore';
import ExerciseSwitch from '../components/ExerciseSwitch';
import ExerciseTable from '../components/ExerciseTable';
import { Button, Modal } from 'react-bootstrap';
import fbApp from '../FirebaseConfig'
import FirestoreDeleteExercise from '../services/FirestoreDeleteExercise'

function Exercises() {

    const [exercises, setExercises] = React.useState([])
    const [exercise,setExercise] = React.useState([])
    const [exerciseSwitchProperty,setexerciseSwitchProperty] = React.useState()
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    React.useEffect(() =>{
            FetchData()
        },[])

    const FetchData = async () => {
        const db = fbApp.firestore()
            const data = await db.collection('exercises').get()
            setExercises(data.docs.map(doc=>{
                let obj;
                obj = doc.data();
                obj.id = doc.id;
                return obj;
            }))
        }
    
    function HandleEdit(id){
        if (exerciseSwitchProperty !== "edit") {
            for(var i = 0; i < exercises.length; i++) {        
                if (exercises[i].id===id){
                    setExercise(exercises[i])
                }
            }
            setexerciseSwitchProperty("edit")
        } else{
            setexerciseSwitchProperty(null) 
        }
    }

    function HandleDelete(id){
        for(var i = 0; i < exercises.length; i++) {        
            if (exercises[i].id===id){
                FirestoreDeleteExercise(exercises[i].id)
                handleShow()
                break;
            }
        }
    }

    function EditSaveDeleteHappened(){
        setexerciseSwitchProperty(null)
    }

    function HandleView(){
        if (exerciseSwitchProperty !== "view") {
            setexerciseSwitchProperty("view") 
        } else{
            setexerciseSwitchProperty(null) 
        }
    }
    
    function HandleNew(){
        if (exerciseSwitchProperty !== "new") {
            setexerciseSwitchProperty("new") 
        } else{
            setexerciseSwitchProperty(null) 
        }
    }

    return (
        <div>
            <Button onClick= {(e) => HandleNew()} variant="dark">Add a new exercise</Button>
            <ExerciseSwitch
                sendFetchData={FetchData}
                componentType={exerciseSwitchProperty}
                exercise={exercise}
                SendEditSaveDeleteHappened={EditSaveDeleteHappened}/>
            <ExerciseTable
                SendHandleEdit={HandleEdit}
                SendHandleView={HandleView}
                SendHandleDelete={HandleDelete}
                exercises={exercises}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Exercise deleted!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="secondary" onClick= {(e) => {
                    handleClose()
                    FetchData()
                }
            }
                >
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Exercises