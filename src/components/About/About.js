import React from "react";
import Profile from "../../resources/Pictures/profile2.jpg";
import classes from "./About.module.css";

const About = () => {
  function getAge(d1) {
    var now = new Date();
    var d2 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    );
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <div className={classes.profilePicDiv}>
          <img className={classes.picture} src={Profile} />
        </div>

        <div className={classes.about}>
          <h3>Computer Science Engineer</h3>
          <div className={classes.listDiv}>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Birthday: </strong>
                    08 November 1999
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phone: </strong>
                    <a href="tel:+905535885367" target="_blank">
                      +90 553 588 5367
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>City: </strong>
                    Antalya / Turkey
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Age: </strong>
                    {getAge(new Date(1999, 11, 8, 0, 0, 0))}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>E-mail: </strong>
                    <a href="mailto:mustafakanli98@gmail.com" target="_blank">
                      mustafakanli98@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Degree: </strong>
                    Bachelor Degree
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        I am a third year student at Akdeniz University Computer Engineering. I
        am a person who constantly researches, develops himself, loves listening
        to music and doing sports, has entrepreneurial ideas, invests in his own
        future, and can easily adapt.
        <br></br>
        I'm working about the Full-Stack Web Development. So that, I use React
        for the front-end. I used Node.Js for the back-end. However, I didn't
        use any frameworks. So that, I don't make any complicate project. I'm
        learning to .Net for the back-end. I will go away to this way.
      </div>
    </div>
  );
};

export default About;
