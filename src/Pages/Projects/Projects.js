import React from "react";
import Card from "../../components/Cards/Card";
import Bildir from "../../resources/Pictures/bildir.png";
import Hotel from "../../resources/Pictures/hotel.png";
import HotelDb from "../../resources/Pictures/hotelDb2.png";
import classes from "./Projects.module.css";

const Projects = () => {
  const tagsBildir = ["React", "HTML", "CSS", "UI/UX"];
  const hotel = ["HTML", "CSS", "JavaScript", "PHP", "UI/UX"];
  const hotelDb = ["Database", "Mysql"];

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
          tags={tagsBildir}
          projectTitle="Bildir"
          projectDescription="Event sharing platform. Communities share events and students can register to events and communities. Event sharing platform. Communities can share events and students can register to events and communities. "
        />

        <Card
          src={Hotel}
          githubLink="https://github.com/MustafaKANLI/Hotel"
          tags={hotel}
          projectTitle="Paradis Hotel"
          projectDescription="Hotel reservation system. There are 2 interfaces. First interface is for the customers. They can make a reservation and they can see comments about the rooms. Other interface is for the admins. It's a classic admin panel. Admins can make reservations, add rooms, delete rooms, edit rooms (they can make CRUD operations)."
        />
        <Card
          src={HotelDb}
          tags={hotelDb}
          githubLink="https://github.com/MustafaKANLI/Hotel/tree/master/src/database"
          projectTitle="Paradis Hotel"
          projectDescription="Database of hotel reservation system."
        />
      </div>
    </div>
  );
};

export default Projects;
