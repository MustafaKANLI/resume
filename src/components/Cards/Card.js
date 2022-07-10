import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [isLive, setIsLive] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.pictureDiv}>
        <img className={classes.picture} src={props.src} />
      </div>
      <div>
        <button>See Live</button>
        <button>Github</button>
      </div>
      <div>tags</div>
      <div>Project description</div>
    </div>
  );
};

export default Card;
