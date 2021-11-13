import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDyL6enE02HoS5Y_H0Xp9vETJMerPFGP-E",
    authDomain: "crwn-clothing-9b7b2.firebaseapp.com",
    projectId: "crwn-clothing-9b7b2",
    storageBucket: "crwn-clothing-9b7b2.appspot.com",
    messagingSenderId: "65078540400",
    appId: "1:65078540400:web:aa08b87200f3b1e540dcb5",
    measurementId: "G-X0Y5PY7995"
  };
  
  export const createUserProfileDocument = async(userAuth,additionalData) =>{
   if(!userAuth) return;
 
   const userRef = firestore.doc(`users/{userAuth.uid}`);
   const snapshot = await userRef.get();
   console.log(snapshot);

   if(!snapshot.exists){
     const {displayName , email} = userAuth;
     const createdAt = new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData,
       })
     } catch(error){
       console.log('error creating user' , error.message);  
     }
   }
   return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
  