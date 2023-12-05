import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
  const AuthInfo = {
    user,
    createUser
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
