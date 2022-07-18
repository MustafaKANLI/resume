import React from "react";
import classes from "./Slider.module.css";
import images from "./sources";

const Slideshow = () => {
  const sources = [
    { source: "../../resources/Pictures/bildir.png" },
    { source: "../../resources/Pictures/hotel.png" },
  ];

  return (
    <div className={classes.wrapper}>
      asdads
      {images.map((data, key) => {
        console.log(data.src);

        return <img src={data.src} key={data.id} />;
      })}
    </div>
  );
};

export default Slideshow;
