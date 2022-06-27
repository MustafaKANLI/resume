import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Profile from "../../resources/Pictures/profile2.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  let screenWidth = window.screen.availWidth;
  const menuButtonHandler = () => {
    setIsOpen(false);
  };

  const closeButtonHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className={classes.menuButton}>
        {isOpen ? (
          <AiOutlineClose onClick={menuButtonHandler} />
        ) : (
          <AiOutlineMenu onClick={closeButtonHandler} />
        )}
      </button>

      <div className={classes.navBarDiv}>
        <header className={isOpen ? classes.headerOpen : classes.headerClosed}>
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
      </div>
    </>
  );
};

export default Navbar;
