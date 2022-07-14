import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Tag from "./Tags/Tag";

const Card = (props) => {
  const [isLive, setIsLive] = useState(false);

  const setLive = () => {
    if (props.liveLink) {
      setIsLive(true);
    }
  };

  useEffect(() => {
    setLive();
  });

  const listItems = props.numbers?.map((number) => (
    <Tag key={number.toString()} text={number}></Tag>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.pictureDiv}>
        <img className={classes.picture} src={props.src} />

        <div className={classes.buttonGroup}>
          {isLive && (
            <a target="_blank" href={props.liveLink}>
              <div className={classes.button}>
                <AiFillEye />
              </div>
            </a>
          )}

          <a target="_blank" href={props.githubLink}>
            <div className={classes.button}>
              <AiFillGithub />
            </div>
          </a>
        </div>
      </div>

      <div className={classes.tags}>{listItems}</div>
      <div>Project description</div>
    </div>
  );
};

export default Card;
