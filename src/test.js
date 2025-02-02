// Import the necessary Firebase modules
import { getFirestore, doc, collection } from 'firebase/firestore';
import { getApp } from 'firebase/app';

// Initialize Firebase App (assuming you've already initialized the app elsewhere in your project)
const app = getApp();

// Get Firestore instance
const firestore = getFirestore(app);

// Correct document path and remove extra spaces
const docRef = doc(firestore, 'users', ' 7Ivgzaiq9ZC3n5mBsZxs', 'cartitems', 'D0EP2daa5U7wnhM4qywK');

// Now you can use `docRef` to get or set data in the specific document