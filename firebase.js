// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBRsF9UsAgVmM4YJ03MiOekwKdSjdcoTGE',
	authDomain: 'uber-next-clone-74f65.firebaseapp.com',
	projectId: 'uber-next-clone-74f65',
	storageBucket: 'uber-next-clone-74f65.appspot.com',
	messagingSenderId: '46696667368',
	appId: '1:46696667368:web:2c7fce7845700b7ce4d15d',
	measurementId: 'G-XLBT5EWGCL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
