import fbApp from "../FirebaseConfig";
import '@firebase/firestore'

async function FirestoreSetExercise(exercise) {
    const db = fbApp.firestore()
    if (exercise.id) {
        return db.collection("exercises")
            .doc(exercise.id)
            .set(exercise, { merge: true })
    } else {
        return db.collection("exercises")
            .doc()
            .set(exercise, { merge: true })
    }
}

export default FirestoreSetExercise