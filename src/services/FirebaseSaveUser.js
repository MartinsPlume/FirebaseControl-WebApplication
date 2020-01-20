import fbApp from '../FirebaseConfig'

async function FirebaseSaveUser (email,password){
    try{
        await fbApp
            .auth()
            .createUserWithEmailAndPassword(email,password)
            return true
    }
    catch (error){
        console.log(error)
        return false
    }
}

export default FirebaseSaveUser