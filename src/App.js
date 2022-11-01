import React from "react";

import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Intro />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
