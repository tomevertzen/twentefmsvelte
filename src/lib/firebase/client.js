import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBcUcsCTkABSQoiqUVUlsjD74lpIZjLWCQ',
	authDomain: 'twentefm-ee676.firebaseapp.com',
	projectId: 'twentefm-ee676',
	storageBucket: 'twentefm-ee676.appspot.com',
	messagingSenderId: '1022387491473',
	appId: '1:1022387491473:web:e7896505738c3c5206e530'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);

export { auth, db };
