import React from "react";
import Profile from "../../resources/Pictures/profile2.jpg";
import classes from "./About.module.css";

const About = () => {
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
                    +90 553 588 5367
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
                    <strong>Birthday: </strong>
                    08 November 1999
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phone: </strong>
                    +90 553 588 5367
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
          </div>
        </div>
      </div>

      <div>
        I am a third year student at Akdeniz University Computer Engineering. I
        am a person who constantly researches, develops himself, loves listening
        to music and doing sports, has entrepreneurial ideas, invests in his own
        future, and can easily adapt.
      </div>
    </div>
  );
};

export default About;
