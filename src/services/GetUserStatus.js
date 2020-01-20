import fbApp from "../FirebaseConfig";
import '@firebase/firestore'

async function FetchUser (userEmail) {

    const CheckIfAdmin = async () => {
        const db = fbApp.firestore()
        db.collection('users').doc(userEmail)
        .get()
        .then(function(doc){
            if(doc.exists){
                admin=JSON.stringify(doc.data())
            }else{
                console.log("No such document!");
            }
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
        })
        }

        let admin = false;
    CheckIfAdmin(userEmail)

        return admin

}

export default FetchUser