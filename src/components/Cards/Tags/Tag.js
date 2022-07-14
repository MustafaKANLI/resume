import React from "react";
import classes from "./Tag.module.css";

const Tag = (props) => {
  return (
    <div className={classes.tag}>
      <p>{props.text}</p>
    </div>
  );
};

export default Tag;
