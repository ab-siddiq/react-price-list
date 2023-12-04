import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate('/')
  }
  return (
    <div className="">
      <div className="h-screen flex items-center justify-center bg-red-200 text-center">
        <div className="">
          <p className="font-bold text-red-900 text-2xl">OOPS!!!</p>
          <p className="font-bold text-red-900">Page not defined yet!</p>
          <button onClick={handleNavigate} className="bg-pink-900 text-pink-100 rounded-lg px-2 py-1 mt-2">Back To Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
