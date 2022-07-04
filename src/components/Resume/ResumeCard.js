import React from "react";
import classes from "./Resume.module.css";

const ResumeCard = (props) => {
  return (
    <div>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>{props.year}</h5>
        </div>
        <div>
          <h5>{props.firstHeader}</h5>
          <h5>{props.secondHeader}</h5>
          <p>{props.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
