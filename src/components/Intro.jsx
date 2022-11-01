import React from "react";

import "./Intro.css";
import cardlogo1 from "../assets/Presentation-amico.png";
import cardlogo2 from "../assets/Seminar-bro.png";
import cardlogo3 from "../assets/Webinar-bro.png";

const Intro = () => {
  return (
    <div className="intro_adyapan">
      <p className="intro_dis">how do adyapan helps u???</p>
      <hr />
      <div className="cards">
        <div className="card">
          <img src={cardlogo1} alt="study" />
          <p className="card_dis">users can choose mentors</p>
        </div>
        <div className="card">
          <img src={cardlogo2} alt="study" />
          <p className="card_dis">
            mentors are available to
            <br /> assist u
          </p>
        </div>
        <div className="card">
          <img src={cardlogo3} alt="study" />
          <p className="card_dis">u can learn face to face</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Intro;
