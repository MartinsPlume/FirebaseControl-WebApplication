import fbApp from "../FirebaseConfig";
import '@firebase/firestore'

async function FirestoreDeleteExercise(exercise) {
     const db = fbApp.firestore()
     db.collection("exercises").doc(exercise).delete()
}

export default FirestoreDeleteExercise