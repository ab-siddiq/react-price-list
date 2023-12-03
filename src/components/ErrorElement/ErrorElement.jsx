import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const ErrorElement = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="h-screen flex items-center justify-center bg-red-200 text-center">
        <div className="">
          <p className="font-bold text-red-900 text-2xl">OOPS!!!</p>
          <p className="font-bold text-red-900">Page not defined yet!</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorElement;
