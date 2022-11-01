import React from "react";

import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Intro />
    </div>
  );
}

export default App;
