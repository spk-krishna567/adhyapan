import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Maincontent from "../components/Maincontent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Intro />
      <Maincontent />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
