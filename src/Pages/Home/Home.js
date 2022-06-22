import React from "react";
import classes from "./Home.module.css";
import About from "../../components/About/About";
import video from "../../resources/Gifs/bg.mp4";

const Home = () => {
  return (
    <div>
      <div className={classes.videoDiv}>
        <h1 className={classes.nameTitle}>Mustafa Nur KANLI</h1>
        <div className={classes.grey}></div>
        <video className={classes.video} autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <About></About>
    </div>
  );
};

export default Home;
