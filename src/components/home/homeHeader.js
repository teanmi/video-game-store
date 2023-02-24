import React from "react";
import "./homeHeader.css";


const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <div className="homeHeader__container home__bottomBorder">
        <div className="homeHeader__words">
          <h1
            data-aos="fade-in"
            data-aos-delay="200"
            className="homeHeader__title"
          >
            Game Mart
          </h1>
          <h4 data-aos="fade-in"
            data-aos-delay="400" className="homeHeader__subtitle">The Gaming Store</h4>
        </div>
        <div data-aos="fade-up"
            data-aos-delay="600" className="homeHeader__img">
          <img src="../images/gamingHeader.svg" alt="Gaming" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
