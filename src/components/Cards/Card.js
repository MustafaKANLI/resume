import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Card = (props) => {
  const [isLive, setIsLive] = useState(false);
  //const navTo = useHref();
  //setIsLive(props.setIsLive);
  const setLive = () => {
    if (props.liveLink) {
      setIsLive(true);
    }
  };

  const liveButtonHandler = () => {
    //  window.location.href(props.liveLink);
  };

  useEffect(() => {
    setLive();
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.pictureDiv}>
        <img className={classes.picture} src={props.src} />
      </div>
      <div className={classes.buttonGroup}>
        {isLive && (
          <a target="_blank" href={props.liveLink}>
            <div className={classes.button}>
              <AiFillEye />
            </div>
          </a>
        )}

        <a target="_blank" href={props.githubLink}>
          <div className={classes.button}>
            <AiFillGithub />
          </div>
        </a>
      </div>
      <div>tags</div>
      <div>Project description</div>
    </div>
  );
};

export default Card;
