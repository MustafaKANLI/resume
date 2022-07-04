import React from "react";
import classes from "./Resume.module.css";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <div className={classes.wrapper}>
      <h3>Resume</h3>
      <div className={classes.hr}></div>

      <h4>Work Experience</h4>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2021 - 2022</h5>
        </div>
        <div>
          <h5>Turkish Aerospace</h5>
          <h5>Sky Experience</h5>
          <p>I was long term intern in TAI. </p>
        </div>
      </div>
      <br></br>

      <ResumeCard
        year="2022"
        firstHeader="Turkish Aerospace"
        secondHeader="Sky Discover"
        explanation="Summer  Internship"
      />

      <div className={classes.hr}></div>

      <h4>Education</h4>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2018 - 2023</h5>
        </div>
        <div>
          <h5>Akdeniz University</h5>
          <h5>Computer Science Engineering</h5>
        </div>
      </div>
      <br></br>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2014 - 2018</h5>
        </div>
        <div>
          <h5>İMKB Süleyman Demirel Science High School </h5>
        </div>
      </div>

      <div className={classes.hr}></div>

      <h4>Communities</h4>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2018 - 2022</h5>
        </div>
        <div>
          <h5>Akdeniz University Entrepreneurship and Career Society</h5>
          <h5>Media and Digital Department Coordinator</h5>
          <p>
            2018 - 2019 => Member <br></br>
            2019 - 2021 => Member of IT and Digital Deparment (I managed website
            and mobile app of community)<br></br>
            2019 - 2021 => Member of the Media and Broadcast Department (I
            designed posts for the social media)<br></br>
            2021 - 2022 => Coordinator of the Media and IT Deparment (I
            coordinate IT team, Graphic Design team, Text and Content Creation
            team)
          </p>
        </div>
      </div>
      <br></br>

      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2018 - 2022</h5>
        </div>
        <div>
          <h5>IEEE Akdeniz Student Branch</h5>
          <h5>Computer Society Vice Chairman</h5>
          <p>
            2018 - 2021 {"=>"} Member <br></br>
            2021 - 2022 {"=>"} Vice Chairman of Computer Society (I organized
            webinars and educated 4 weeks about the Web Programming.)
          </p>
        </div>
      </div>

      <div className={classes.hr}></div>

      <h4>Seminars {"&"} Certificates</h4>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2022</h5>
        </div>
        <div>
          <h5>14th National Entrepreneurship Summit</h5>
          <p>Organizing Community Member (Akdeniz GKT)</p>
        </div>
      </div>
      <br></br>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2021</h5>
        </div>
        <div>
          <h5>13th National Entrepreneurship Summit</h5>
          <p>Organizing Community Member (Akdeniz GKT)</p>
        </div>
      </div>
      <br></br>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2019</h5>
        </div>
        <div>
          <h5>GDG Dev Fest'19</h5>
          <p>Participant</p>
        </div>
      </div>
      <br></br>
      <div className={classes.workBlock}>
        <div className={classes.year}>
          <h5>2018</h5>
        </div>

        <div>
          <h5>Digital Financial Literacy Training</h5>

          <p>TEB Bank</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
