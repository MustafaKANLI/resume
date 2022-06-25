import React from "react";
import classes from "./Home.module.css";
import About from "../../components/About/About";
import Video from "../../components/Video/Video";

const Home = () => {
  return (
    <div>
      <Video></Video>
      <About></About>
    </div>
  );
};

export default Home;
