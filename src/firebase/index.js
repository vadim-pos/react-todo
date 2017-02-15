import firebase from 'firebase';

try {
    let config = {
        apiKey: "AIzaSyD9b7NOWFrlSAEap1bI6gHcpNLoS1vJWJc",
        authDomain: "react-todo-89629.firebaseapp.com",
        databaseURL: "https://react-todo-89629.firebaseio.com",
        storageBucket: "react-todo-89629.appspot.com",
        messagingSenderId: "881698923778"
    };
    firebase.initializeApp(config);
} catch(e) {
    console.log(e.message)
}

export let firebaseRef = firebase.database().ref();
export default firebase;