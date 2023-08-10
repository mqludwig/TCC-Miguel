import {auth} from './firebaseConfig'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const emailLogin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(error)
        return null

    });
}

export {emailLogin}