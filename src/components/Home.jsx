import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import PriceList from "./PriceList/PriceList";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <PriceList></PriceList>
      <Footer></Footer>
    </div>
  );
};

export default Home;
