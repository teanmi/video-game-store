import React from "react";
import "./homeHeader.css";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <div className="homeHeader__container">
        <div className="homeHeader__words">
          <h1 className="homeHeader__title">Game Mart</h1>
          <h4 className="homeHeader__subtitle">The Gaming Store</h4>
        </div>
        <div className="homeHeader__img">
          <img src="../images/gamingHeader.svg" alt="Gaming" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
