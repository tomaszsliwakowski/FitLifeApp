import React from "react";
const Nav = ({ open, click }) => {
  return (
    <ul className={open ? "nav_panel open" : "nav_panel"}>
      <li>
        <a href="#bmi_calc" onClick={click}>
          Kalkulator BMI
        </a>
      </li>
      <li>
        <a href="#kcal_calc" onClick={click}>
          Kalkulator Kcal
        </a>
      </li>
    </ul>
  );
};

export default Nav;
