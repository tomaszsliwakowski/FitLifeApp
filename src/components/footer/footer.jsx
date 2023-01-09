import React from "react";
import "./footer.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <h2>FitLifeApp</h2>
        <p>
          Jest to aplikacja która pomaga w utrzymaniu zdrowego truby życia.
          Skierowana jest dla osób które chcą zmienić coś w swoim życiu jak i
          dla tych którzy są w trakcie bo zdrowe życie to długie życie.
        </p>
      </div>
      <a href="#">
        <BsArrowUpCircleFill className="arrowup" />
      </a>
    </div>
  );
};

export default Footer;
