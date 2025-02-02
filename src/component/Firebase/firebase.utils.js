import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgZtI29SH-AiGzTimgg3uJ9vjIq62hEPw",
  authDomain: "crown-db-72f0a.firebaseapp.com",
  projectId: "crown-db-72f0a",
  storageBucket: "crown-db-72f0a.appspot.com",
  messagingSenderId: "872297727325",
  appId: "1:872297727325:web:f40815101177c915f494b4",
  measurementId: "G-ET0TRDK2JC",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Google auth provider
export const googleProvider = new GoogleAuthProvider();

// Create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return userRef;
};

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    throw error;
  }
};
