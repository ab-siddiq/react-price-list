import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import PageLoading from "../PageLoading/PageLoading";

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
      <NavBar></NavBar>
     
      <div>{navigation.state === 'loading' && <PageLoading></PageLoading>}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
