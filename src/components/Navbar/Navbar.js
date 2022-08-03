import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Profile from "../../resources/Pictures/profile2.jpg";
import {
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

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
          <AiOutlineMenu onClick={menuButtonHandler} />
        ) : (
          <AiOutlineMenu onClick={closeButtonHandler} />
        )}
      </button>

      <div className={classes.navBarDiv} onClick={closeButtonHandler}>
        <header className={isOpen ? classes.headerOpen : classes.headerClosed}>
          <div className={classes.navBar}>
            <div>
              <img className={classes.profile} src={Profile} />
              <div className={classes.contact}>
                <div className={classes.contactButton}>
                  <a
                    href="https://www.linkedin.com/in/mustafakanli/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
                <div className={classes.contactButton}>
                  <a
                    href="https://www.github.com/mustafakanli/"
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>
                </div>
                <div className={classes.contactButton}>
                  <a href="mailto:mustafakanli98@gmail.com" target="_blank">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
            <h3>Mustafa Nur KANLI</h3>
            <Link to="/">
              <div className={classes.link}>Home</div>
            </Link>
            <Link to="/projects">
              <div className={classes.link}>Skills {"-"} Projects</div>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
