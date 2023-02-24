import React from "react";
import Game from "./gamePreview";
import "./games.css";

const Games = () => {
  return (
    <section id="games">
      <div className="games__container home__bottomBorder">
        <h1
          data-aos="fade-in"
          data-aos-delay="200"
          className="games__title home__title"
        >
          Games
        </h1>
        <div data-aos="zoom-in" data-aos-delay="600" className="games__list">
          <Game game="call-of-duty-modern-warfare-ii" />
          <Game game="elden-ring" />
          <Game game="god-of-war-ragnarok" />
          <Game game="far-cry-6" />
        </div>
      </div>
    </section>
  );
};

export default Games;
