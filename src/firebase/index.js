import firebase from 'firebase';

try {
    let config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,
    };
    firebase.initializeApp(config);
} catch(e) {
    console.log(e.message)
}

export let firebaseRef = firebase.database().ref();
export default firebase;