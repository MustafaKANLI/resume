import React from "react";
import classes from "./Home.module.css";
import About from "../../components/About/About";
import Video from "../../components/Video/Video";
import Resume from "../../components/Resume/Resume";

const Home = () => {
  return (
    <div>
      <Video></Video>
      <About></About>
      <Resume></Resume>
    </div>
  );
};

export default Home;
