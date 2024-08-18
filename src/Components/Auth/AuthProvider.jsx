import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const singUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gooogleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = {
        singUpUser,
        logInuser,
        gooogleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;