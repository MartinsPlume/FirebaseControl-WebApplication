import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import UserSwitch from '../components/UserSwitch'
import UserTable from '../components/UserTable'
import fbApp from '../FirebaseConfig'

function Users() {

    const [users, setUsers] = React.useState([])
    const [user,setUser] = React.useState(null)
    const [componentType,setcomponentType] = React.useState(null)

    React.useEffect(() =>{
        FetchData()
    },[])

    const FetchData = async () => {
    const db = fbApp.firestore()
        const data = await db.collection('users').get()
        setUsers(data.docs.map(doc =>doc.data()))
    }

    function HandleEdit(id){
        if (componentType !== "edit") {
            for(var i = 0; i < users.length; i++) {        
                if (users[i].email===id){
                    setUser(users[i])
                }
            }
            setcomponentType("edit")
        } else{
            setcomponentType(null) 
        }
    }

    function HandleNew(){
        if (componentType!='new'){
            setcomponentType('new')
        }
        else{
            setcomponentType(null)
        }
    }

    function EditSaveDeleteHappened(){
        setcomponentType(null)
    }

    return (
        <div>
            <Button onClick= {(e) => HandleNew()} variant="dark">Add new User</Button>
            <UserSwitch EditSaveDeleteHappened={EditSaveDeleteHappened}
                        componentType={componentType}
                        user={user}
                        sendFetchData={FetchData}
                        SendCloseUserSwitch={EditSaveDeleteHappened}/>
            <UserTable
                SendHandleEdit={HandleEdit}
                users={users}/>
        </div>
    )
}

export default Users