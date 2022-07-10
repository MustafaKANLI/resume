import React from "react";
import Card from "../../components/Cards/Card";
import Bildir from "../../resources/Pictures/bildir.png";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <h3>Projects</h3>
      </div>
      <div className={classes.grid}>
        <Card src={Bildir}></Card>
        <Card src={Bildir}></Card>
        <Card src={Bildir}></Card>
        <Card src={Bildir}></Card>
        <Card src={Bildir}></Card>
        <Card src={Bildir}></Card>
      </div>
    </div>
  );
};

export default Projects;
