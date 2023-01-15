import React, { useEffect, useState } from "react";
import { RAWG_API_KEY } from "../apiKey";
import { useParams } from "react-router-dom";
import Nav from "../components/general/nav";
import CartButton from "../components/general/cartButton";
import Footer from "../components/general/footer";

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
  console.log(gameData);

  return (
    <div>
      <Nav links="cart" />
      <div className="game__container">
        <div className="game__box">
          <h2 className="game__title">{gameData?.name}</h2>
          <img
            className="game__image"
            src={gameData?.background_image}
            alt=""
          />
          <ul className="game__developers">
            Developers:{" "}
            {gameData?.developers?.map((item, index) => {
              if (index < 3) {
                return (
                  <li className="game__developer" key={index}>
                    {item.name}
                  </li>
                );
              }
            })}
          </ul>
          <p className="game__rating line-break">
            Rating: {Math.round(gameData?.rating * 10) / 10} / 5.0
          </p>
          <ul className="game__genres line-break">
            Genres:
            {gameData?.genres?.map((item, index) => {
              if (index < 5) {
                return (
                  <li className="game__genre" key={index}>
                    {item.name}
                  </li>
                );
              }
            })}
          </ul>
          <p className="game__description line-break">
            {gameData?.description_raw}
          </p>
        </div>
      </div>

      <CartButton />
      <Footer />
    </div>
  );
};

export default Game;
