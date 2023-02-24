import React from "react";
import HomeValue from "./homeValue";
import "./homeValues.css";

const HomeValues = () => {
  return (
    <div id="values">
      <div className="values__container">
        <h1
          data-aos="fade-in"
          data-aos-delay="200"
          className="values__title home__title"
        >
          Values
        </h1>
        <div className="values__list">
          <HomeValue title="Happy Customers" direction={"right"} />
          <HomeValue title="1,000+ Games" direction={"up"} />
          <HomeValue title="Unbeatable Service" direction={"left"} />
        </div>
      </div>
    </div>
  );
};

export default HomeValues;
