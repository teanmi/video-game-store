import React, { useEffect, useState } from "react";
import "./slideshow.css";

const Slideshow = () => {
  const data = [
    <div key={1} className="slide fade">
      <img src="images/elden-ring.jpg" alt="" />
      <div className="slide__text">Elden Ring</div>
    </div>,
    <div key={2} className="slide fade">
      <img src="images/god-of-war.jpg" alt="" />
      <div className="slide__text">God of War Ragnarok</div>
    </div>,
    <div key={3} className="slide fade">
      <img src="images/far-cry-6.jpg" alt="" />
      <div className="slide__text">Far Cry 6</div>
    </div>,
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
