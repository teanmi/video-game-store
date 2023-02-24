import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./slideshow.css";
import Skeleton from "../ui/skeleton";

const Slideshow = () => {
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);

  const data = [
    <Link to="../game/elden-ring" key={1} className="slide fade">
      <div className="slideshowImg__container">
        {loaded1 ? null : <Skeleton width="100%" height="100%" />}
        <img
          onLoad={() => setLoaded1(true)}
          style={loaded1 ? {} : { display: "none" }}
          src="images/elden-ring.jpg"
          alt=""
        />
      </div>
      <div className="slide__text">Elden Ring</div>
    </Link>,
    <Link to="../game/god-of-war-ragnarok" key={2} className="slide fade">
      <div className="slideshowImg__container">
        {loaded2 ? null : <Skeleton width="100%" height="100%" />}
        <img
          onLoad={() => setLoaded2(true)}
          style={loaded2 ? {} : { display: "none" }}
          src="images/god-of-war.jpg"
          alt=""
        />
      </div>
      <div className="slide__text">God of War Ragnarok</div>
    </Link>,
    <Link to="../game/far-cry-6" key={3} className="slide fade">
      <div className="slideshowImg__container">
        {loaded3 ? null : <Skeleton width="100%" height="100%" />}
        <img
          onLoad={() => setLoaded3(true)}
          style={loaded3 ? {} : { display: "none" }}
          src="images/far-cry-6.jpg"
          alt=""
        />
      </div>
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
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="slideshow__container"
      >
        {data.filter((item, index) => {
          return index === slideIndex;
        })}
      </div>
    </div>
  );
};

export default Slideshow;
