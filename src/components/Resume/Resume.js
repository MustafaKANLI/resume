import React from "react";
import classes from "./Resume.module.css";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  function NewlineText(props) {
    const text = props.text;
    return text.split("\n").map((str) => <p>{str}</p>);
  }
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Resume</h3>
      <div className={classes.hr}></div>

      <h4 className={classes.cardTitle}>Work Experience</h4>

      <ResumeCard
        year="2022"
        firstHeader="Turkish Aerospace"
        secondHeader="Sky Discover"
        explanation="Summer  Internship"
      />

      <br></br>

      <ResumeCard
        year="2021 - 2022"
        firstHeader="Turkish Aerospace"
        secondHeader="Sky Experience"
        explanation="Long-term  Internship"
      />

      <div className={classes.hr}></div>

      <h4 className={classes.cardTitle}>Education</h4>
      <ResumeCard
        year="2018 - 2023"
        firstHeader="Akdeniz University"
        explanation="Computer Science Engineering"
      />
      <br></br>
      <ResumeCard
        year="2014 - 2018"
        firstHeader="İMKB Süleyman Demirel Science High School"
      />

      <div className={classes.hr}></div>

      <h4 className={classes.cardTitle}>Communities</h4>
      <ResumeCard
        year="2018 - 2022"
        firstHeader="Akdeniz University Entrepreneurship and Career Society"
        secondHeader="Media and Digital Department Coordinator"
        explanation={
          <NewlineText
            text={
              " 2018 - 2019 => Member \n 2019 - 2021 => Member of IT and Digital Deparment (I managed website and mobile app of community)\n 2019 - 2021 => Member of the Media and Broadcast Department (I designed posts for the social media)\n 2021 - 2022 => Coordinator of the Media and IT Deparment (I coordinate IT team, Graphic Design team, Text and Content Creation team)"
            }
          />
        }
      />

      <br></br>
      <ResumeCard
        year="2018 - 2022"
        firstHeader="IEEE Akdeniz Student Branch"
        secondHeader="Computer Society Vice Chairman"
        explanation={
          <NewlineText
            text={
              " 2018 - 2021 => Member \n 2021 - 2022 => Vice Chairman of Computer Society (I organized webinars and educated 4 weeks about the Web Programming.)"
            }
          />
        }
      />

      <div className={classes.hr}></div>

      <h4 className={classes.cardTitle}>Seminars {"&"} Certificates</h4>
      <ResumeCard
        year="2022"
        firstHeader="14th National Entrepreneurship Summit"
        explanation="Organizing Community Member (Akdeniz GKT)"
      />

      <br></br>
      <ResumeCard
        year="2021"
        firstHeader="13th National Entrepreneurship Summit"
        explanation="Organizing Community Member (Akdeniz GKT)"
      />

      <br></br>
      <ResumeCard
        year="2019"
        firstHeader="GDG Dev Fest'19"
        explanation="Participant"
      />

      <br></br>
      <ResumeCard
        year="2018"
        firstHeader="Digital Financial Literacy Training"
        secondHeader="TEB Bank"
      />

      <div className={classes.hr}></div>

      <h4 className={classes.cardTitle}>References</h4>
      <ResumeCard
        year="from TUSAŞ"
        firstHeader="Mehmet Evren COŞKUN"
        secondHeader="Senior Software Engineer"
        explanation="mevrencoskun@gmail.com"
      />

      <br></br>
      <ResumeCard
        year="from TUSAŞ"
        firstHeader="Songül DEMİRTAŞ"
        secondHeader="Project Manager"
        explanation="songul.demirtas@tai.com.tr"
      />
    </div>
  );
};

export default Resume;
