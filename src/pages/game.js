import React, { useEffect, useState } from "react";
import { RAWG_API_KEY } from "../apiKey";
import { useParams } from "react-router-dom";

const Game = (props) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };

  let params = useParams();
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${params.game}?key=${RAWG_API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .catch((err) => console.error(err));
  }, []);

  return <div>
    
  </div>;
};

export default Game;
