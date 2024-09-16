import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // crate account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signup with gmail
  const signInWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //login using email and pass
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    signOut(auth);
  };

  //update profile
  const updateUserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // check singed in user
  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
      else{

      }
    })
    return () =>{
      return unsubscribe();
    }
  }, [])
  const authInfo = {
    user,
    createUser,
    signInWithGmail,
    login,
    logOut,
    updateUserProfile,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
