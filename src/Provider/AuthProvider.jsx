import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const UserContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
        signIn,
        createUser,
        auth,
        loading,
        setLoading
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;