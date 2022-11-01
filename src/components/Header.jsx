import React from "react";
import "./Header.css";
import head_logo from "../assets/Thesis-pana.png";

const Header = () => {
  return (
    <div className="head_section">
      <div className="head_discription">
        <p className="main_heading">adyapan</p>
        <p className="discription">
          ----Great classrooms characterized by positive,open relationships,
          mutual respect,and shared responsibility for the learning process.
        </p>
      </div>
      <img src={head_logo} alt="study" />
    </div>
  );
};

export default Header;
