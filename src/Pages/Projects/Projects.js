import React from "react";
import Card from "../../components/Cards/Card";
import Bildir from "../../resources/Pictures/bildir.png";
import classes from "./Projects.module.css";

const Projects = () => {
  const numbers = ["Reactttt", "HTML", "CSS", "UI/UX", "sdfsdfs"];
  return (
    <div className={classes.wrapper}>
      <div>
        <h3>Projects</h3>
      </div>
      <div className={classes.grid}>
        <Card
          src={Bildir}
          liveLink="https://bildir.azurewebsites.net/"
          githubLink="https://github.com/MustafaKANLI/BildirWebPublic"
          numbers={numbers}
        />
        <Card src={Bildir} numbers={numbers}></Card>
        <Card src={Bildir} numbers={numbers}></Card>
        <Card src={Bildir} numbers={numbers}></Card>
        <Card src={Bildir} numbers={numbers}></Card>
        <Card src={Bildir} numbers={numbers}></Card>
      </div>
    </div>
  );
};

export default Projects;
