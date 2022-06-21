import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Profile from "../../resources/Pictures/profile2.jpg";

const Navbar = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.navBar}>
        <div>
          <img className={classes.profile} src={Profile} />
        </div>
        <h3>Mustafa Nur KANLI</h3>
        <Link to="/">
          <div className={classes.link}>Home</div>
        </Link>
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
