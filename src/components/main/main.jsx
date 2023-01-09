import React from "react";
import BMI from "../Bmi/bmi";
import KCAL from "../Kcal/kcal";
import "./main.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
const Main = () => {
  return (
    <div className="main">
      <div className="section_baner">
        <span>
          <h2>Zdrowe życie to długie życie</h2>
          <a href="#bmi_calc">
            <BsArrowDownCircleFill className="arrow" />
          </a>
        </span>
      </div>
      <div className="section_calc_bmi" id="bmi_calc">
        <BMI />
      </div>
      <div className="section_calc_kcal" id="kcal_calc">
        <KCAL />
      </div>
    </div>
  );
};

export default Main;
