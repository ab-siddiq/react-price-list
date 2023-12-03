import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
