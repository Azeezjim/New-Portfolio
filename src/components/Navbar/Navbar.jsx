import React from "react";

import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app.__navbarf-link">
        {["Home", "About", "Contact", "Work", "Skills", "Contacts"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
