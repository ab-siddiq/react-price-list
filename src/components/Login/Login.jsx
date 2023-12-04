import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = (props) => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn =() =>{
    signInWithPopup(auth,provider)
    .then(res=>{
      const loggedInUser = res.user
      console.log(loggedInUser)
      setUser(loggedInUser)
    })
    .catch(error=>{
      console.log('error: ',error.message)
    })
  } 
  
  return (
    <div className="h-screen m-5">
      <div className="flex justify-end">
        <div className="border border-pink-900 w-80   mt-10 rounded-xl py-10">
          <div className="grid items-center justify-center gap-x-2 my-1">
            <label className="block" htmlFor="">
              User Name
            </label>
            <div className="">
            <input
              className="border block border-pink-900 p-1 rounded-lg w-full"
              type="text"
            />
            </div>
          </div>
          <div className="flex items-center justify-center  gap-x-2 my-2">
            <label className="" htmlFor="">
              Password
            </label>
            <input
              className="border border-pink-900 p-1 rounded-lg"
              type="text"
            />
          </div>
          <div className="flex items-center justify-end gap-x-2 my-2">
            <button className="bg-pink-900 text-pink-100 px-4 py-1 rounded-lg">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center gap-x-2 my-2  px-5 ">
            <a onClick={handleGoogleSignIn} className="border mt-2 cursor-pointer border-pink-900 text-pink-900 px-4 py-1 rounded-lg">
              Login With Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
