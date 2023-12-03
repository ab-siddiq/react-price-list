import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn =() =>{
    signInWithPopup(auth,provider)
    .then(res=>{
      const user = res.user
      console.log(user)
    })
    .catch(error=>{
      console.log('error: ',error.message)
    })
  } 
  return (
    <div className="h-screen m-5">
      <div className="flex justify-end">
        <div className="border border-pink-900 w-80   mt-10 rounded-xl py-10">
          <div className="flex items-center justify-center gap-x-2 my-1">
            <label className="" htmlFor="">
              User Name
            </label>
            <input
              className="border border-pink-900 p-1 rounded-lg"
              type="text"
            />
          </div>
          <div className="flex items-center justify-center gap-x-2 my-2">
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
          <div className="flex items-center justify-center gap-x-2 my-2">
            <a onClick={handleGoogleSignIn} className="border cursor-pointer border-pink-900 text-pink-900 px-4 py-1 rounded-lg">
              Login With Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
