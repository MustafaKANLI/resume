import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.navBar}>
        <Link to="/skills">
          <div className={classes.link}>Skills</div>
        </Link>

        <Link to="/projects">
          <div className={classes.link}>Projects</div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
