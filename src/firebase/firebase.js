import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaatjOe9eDwkOrJdFGSzk101zSAeF-neA",
  authDomain: "aisi-e3c4b.firebaseapp.com",
  projectId: "aisi-e3c4b",
  storageBucket: "aisi-e3c4b.appspot.com",
  messagingSenderId: "1095128514608",
  appId: "1:1095128514608:web:50e9a537c940f8a9a7adf5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider using google auth provider class 
const provider = new GoogleAuthProvider();

// Set up custom parameters for google authentication
provider.setCustomParameters({
    prompt: "select_account"
});

// Create & export auth instance
export const auth = getAuth();

// Export signInWithPopup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate the db instance
export const db = getFirestore();

// A helper method to upload data to firestore db
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  // Create a batch instance
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
};

// Retreiving data from firestore db
export const getCategoriesAndDocuments = async () => {
  // Get collection ref
  const collectionRef = collection(db, 'categories');
  // Generate a query and get querySnapshot
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}


// Get user document
export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  // Get userSnapShot and check if user exists
  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })

    } catch(error) {
      console.log('There was an error while creating user', error.message);
    }
  }

  return userDocRef;

};

// Signout function
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedLister = (callback) => onAuthStateChanged(auth, callback);