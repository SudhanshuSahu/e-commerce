import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect, signInWithPopup , GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCPJ8VW26Y2n7kJureJpBzlGXB4UcKDiTo",
  authDomain: "crwn-clothing-db-2ead2.firebaseapp.com",
  projectId: "crwn-clothing-db-2ead2",
  storageBucket: "crwn-clothing-db-2ead2.appspot.com",
  messagingSenderId: "760970218548",
  appId: "1:760970218548:web:d9a025293f9a2b19fe8e61"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt:"select_account"
})
export const auth = getAuth();

export const signInWithGooglePopup = ()=> signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth,googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
  if(!userAuth) return ;
 const userDocRef = doc(db, "users",userAuth.uid)

 const userSnapShot = await getDoc(userDocRef)

 console.log(userSnapShot);

 if(!userSnapShot.exists()){
  const {displayName , email} = userAuth;
  const createdAt = new Date();
  
  try {
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...additionalInformation
    })
  } catch (error) {
    console.log('error creating the user',error.message);
  }
 }
 return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return ;
 return await  createUserWithEmailAndPassword(auth,email,password)
}