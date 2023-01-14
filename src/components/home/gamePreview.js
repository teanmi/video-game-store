import React, { useEffect, useState } from "react";
import "./gamePreview.css";
import { RAWG_API_KEY } from "../../apiKey";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };

  const [gameData, setGameData] = useState({});

  useEffect(() => {
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${game}?key=${RAWG_API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="game">
      <Link to={`/game/${game}`} className="game__link">
        <div className="game__pictureContainer">
          <img
            src={gameData?.background_image}
            alt=""
            className="game__picture"
          />
        </div>
        <h3 className="game__title">{gameData.name}</h3>
      </Link>
    </div>
  );
};

export default Game;
