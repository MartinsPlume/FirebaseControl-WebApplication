import fbApp from "../FirebaseConfig";
import '@firebase/firestore'

async function FirestoreSetUser(user) {
    const db = fbApp.firestore()

        db.collection("users")
            .doc(user.email)
            .set(user, { merge: true })
}

export default FirestoreSetUser