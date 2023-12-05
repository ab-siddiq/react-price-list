import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.init";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  // const user = {displayName:'siddiq'}
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = {
    user,
    createUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
