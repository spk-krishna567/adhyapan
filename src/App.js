import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Home from "./shared/Home";
import Login from "./shared/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
