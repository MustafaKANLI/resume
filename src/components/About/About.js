import React from "react";
import Profile from "../../resources/Pictures/profile2.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.profile} src={Profile} />
      </div>
      <div>
        <h2>Mustafa Nur KANLI</h2>
        <div>
          I am a third year student at Akdeniz University Computer Engineering.
          I am a person who constantly researches, develops himself, loves
          listening to music and doing sports, has entrepreneurial ideas,
          invests in his own future, and can easily adapt.
        </div>
      </div>
    </div>
  );
};

export default About;
