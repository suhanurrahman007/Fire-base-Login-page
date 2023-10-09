import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../FireBase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }
  const logOut = () =>{
    setIsLoading(true)
    return signOut(auth)
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
      console.log("curren user is ", currentUser);
      setIsLoading(false)

    })
    return () =>{
      unSubscribe()
    }
  },[])
  const authInfo = { user, isLoading, createUser, signInUser, googleSignIn, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node
};
