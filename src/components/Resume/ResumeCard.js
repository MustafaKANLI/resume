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
          <h5 className={classes.header}>{props.firstHeader}</h5>
          <h6 className={classes.header}>{props.secondHeader}</h6>
          <p className={classes.text}>{props.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
