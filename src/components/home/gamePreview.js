import React, { useEffect, useState } from "react";
import "./gamePreview.css";
import { RAWG_API_KEY } from "../../apiKey";
import { Link } from "react-router-dom";
import Skeleton from "../ui/skeleton";

const Game = ({ game }) => {
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };

  const [gameData, setGameData] = useState({});

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${game}?key=${RAWG_API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="game">
      <Link to={`/game/${game}`} className="game__link">
        <div className="game__pictureContainer">
          {!loading ? <img
            src={gameData?.background_image}
            alt=""
            className="game__picture"
          /> : <Skeleton width="100%" height="100%"/>}
        </div>
        {!loading ? <h3 className="game__title">{gameData.name}</h3> : <Skeleton width="100%"
        height="16px" />}
      </Link>
    </div>
  );
};

export default Game;
