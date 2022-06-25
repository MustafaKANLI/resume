import React from "react";
import classes from "./Video.module.css";
import video from "../../resources/Gifs/bg.mp4";

const Video = () => {
  return (
    <div className={classes.videoWrapper}>
      <h1 className={classes.nameTitle}>Mustafa Nur KANLI</h1>
      <div className={classes.explainDiv}>
        <h3>I'm </h3>
        <h3 className={classes.explainTitle}>Computer Science Engineer</h3>
      </div>
      <div className={classes.grey}></div>
      <div className={classes.videoDiv}>
        <video className={classes.video} autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
