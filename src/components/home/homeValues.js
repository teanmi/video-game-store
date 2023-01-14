import React from "react";
import HomeValue from "./homeValue";
import "./homeValues.css";

const HomeValues = () => {
  return (
    <div id="values">
      <div className="values__container">
      <h1 className="values__title home__title">
        Values
      </h1>
        <div className="values__list">
          <HomeValue title="Happy Customers"/>
          <HomeValue title="1,000+ Games"/>
          <HomeValue title="Unbeatable Service" />
        </div>
      </div>
    </div>
  );
};

export default HomeValues;
