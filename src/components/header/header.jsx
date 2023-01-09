import React, { useState } from "react";
import "./header.css";
import Nav from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [open, setopen] = useState(false);

  const toogle = () => {
    setopen(!open);
  };

  return (
    <div className="header" id="header">
      <div className="logo">
        <a href="#">
          <h1>FitLifeApp</h1>
        </a>
      </div>
      <div className="navigation">
        <Nav open={open} click={toogle} />
        <div className="hamburger">
          <GiHamburgerMenu onClick={toogle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
