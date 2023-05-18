import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    // Signup User With Email and Password 
    const signupUserWIthEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User 
    const updateUser = (createdUser, name, photo) => {
        return updateProfile(createdUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Login user with email password 
    const loginUserWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut User 
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('Logged in User inside auth state observe : ', loggedUser);
            setUser(loggedUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signupUserWIthEmailPassword,
        updateUser,
        loginUserWithEmailPassword,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthProvider = () => {
    return useContext(AuthContext)
}
export default AuthProvider;