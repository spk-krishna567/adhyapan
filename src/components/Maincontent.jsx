import React from "react";

import "./Maincontent.css";
import sidecardimg1 from "../assets/Speech to text-bro.png";
import sidecardimg2 from "../assets/Lesson-amico.png";

const Maincontent = () => {
  return (
    <div className="main">
      <p className="main_dis">#benifits that u can get</p>
      <div className="side_cards">
        <div className="sidecard1">
          <img src={sidecardimg1} alt="study" />
          <p className="sidecard_dis">
            --- &gt;users can live chat with mentors
          </p>
        </div>
        <div className="sidecard2">
          <img src={sidecardimg2} alt="study" />
          <p className="sidecard_dis">
            users can live chat with mentors--- &gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
