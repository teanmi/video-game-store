import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./slideshow.css";

const Slideshow = () => {
  const data = [
    <Link to="../game/elden-ring" key={1} className="slide fade">
      <img src="images/elden-ring.jpg" alt="" />
      <div className="slide__text">Elden Ring</div>
    </Link>,
    <Link to="../game/god-of-war-ragnarok" key={2} className="slide fade">
      <img src="images/god-of-war.jpg" alt="" />
      <div className="slide__text">God of War Ragnarok</div>
    </Link>,
    <Link to="../game/far-cry-6" key={3} className="slide fade">
      <img src="images/far-cry-6.jpg" alt="" />
      <div className="slide__text">Far Cry 6</div>
    </Link>,
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const slideshowInfiniteScroll = () => {
    if (slideIndex >= data.length - 1) {
      return setSlideIndex(0);
    }
    return setSlideIndex(slideIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideshowInfiniteScroll();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        {data.filter((item, index) => {
          return index === slideIndex
        }) }
      </div>
    </div>
  );
};

export default Slideshow;
