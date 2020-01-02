import fbApp from '../FirebaseConfig'

const storage = fbApp.storage()

function uploadImageToFirebaseStorage(photo){
    let promises = prepareImageUpload(photo)
    return new Promise((resolve, reject) => {
        Promise.all(promises)
            .then(result => resolve(convertResultPhotos(result)))
            .catch(err => reject(err));
    })
}

function prepareImageUpload(photo){
    photo = photo || {}
    let promises = []
    // Create a root reference
    let storageRef = storage.ref()
    let photoName = photo.name || Math.random().toString(36).substring(7)
    // Create a reference to 'public/image.jpg'
    let imageFullRef = storageRef.child('ExercisePictures/' + photoName)
    // Insert image type
    let metadata = {
        contentType: photo.type || 'jpg'
    }
    // Upload the file and metadata
    let uploadTask = imageFullRef.put(photo, metadata)
    promises.push(uploadTask.promise_)
    return promises
}

async function convertResultPhotos (snapshots) {
    let photo = null
    photo = {
        name: snapshots[0].metadata.name,
        url: await snapshots[0].ref.getDownloadURL()
    }
    return photo
}

export default {
    uploadImageToFirebaseStorage,
    prepareImageUpload,
    convertResultPhotos
}