import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyDDYPoSlJQqvd32F6LVca7Ru9h281HieoI",
    authDomain: "mart-db-343a5.firebaseapp.com",
    projectId: "mart-db-343a5",
    storageBucket: "mart-db-343a5.appspot.com",
    messagingSenderId: "750104191553",
    appId: "1:750104191553:web:fcc1874676236dad13dcc0",
    measurementId: "G-K0M03CP0LQ"
  };

  export const createUserProfileDocument = async (userAuth, ...others) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapshot =await userRef.get()
      
      if(!snapshot.exists){
          const {displayName, email} = userAuth;
          const createAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...others
            })
          }catch(error){
            console.log('error creating user', error.message)
          }
      }
      return userRef
  }

  firebase.initializeApp(config)

  export const auth =firebase.auth();
  export const firestore =firebase.firestore()
  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase