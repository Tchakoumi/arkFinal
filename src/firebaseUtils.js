import firebase from 'firebase/app'

export const readCollection=(collection)=>(
    firebase.firestore().collection(collection)
        .get()
        .then((querySnapshot) => {
            let data=[]
            querySnapshot.forEach(doc => data=[...data,{...doc.data()}]);
            console.log(data)
            return data
        })
    )

export const deleteDocument=(collection, document)=>{
    firebase.firestore().collection(collection).doc(document).update({
        deleted: true
    });
}

export const uploadImage=(image, reference)=>{
    var storageRef=firebase.storage().ref();
    var imageRef = storageRef.child(reference)
    imageRef.putString(image, 'data_url').then(function(snapshot) {
            console.log('Uploaded a data_url string!');
          });
}

export const downloadImage=(reference)=>{
    // Create a reference with an initial file path and name
    var storage = firebase.storage();
    var pathReference = storage.ref(reference);

    pathReference.getDownloadURL().then(function(url) {
        // document.getElementById('userImg').setAttribute("src", url)
        // console.log(url)
        return(url)
    }).catch(function(error) {
        switch (error.code) {
            case 'storage/object-not-found':
                console.log("file doesn't exist")
            break;
            case 'storage/unauthorized':
                console.log("Unauthorized access. fetch failed")
            break;
            case 'storage/canceled':
                console.log("User canceled upload")
            break;
            case 'storage/unknown':
                console.log("Unknown download token")
            break;
            default:
                console.log("Error getting file")
        }
    });
    
    // Create a reference from a Google Cloud Storage URI
    var gsReference = storage.refFromURL('gs://bucket/lorrain')
    // console.log("gs://fastelections.appspot.com/lorrain")
    
    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/fastelections.appspot.com/o/lorrain');

}