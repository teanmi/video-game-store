import React, { useEffect, useState } from "react";
import { RAWG_API_KEY } from "../apiKey";
import { useParams } from "react-router-dom";
import Nav from "../components/general/nav";
import CartButton from "../components/general/cartButton";
import Footer from "../components/general/footer";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import "./game.css";
import Skeleton from "../components/ui/skeleton";

const Game = (props) => {
  const dispatch = useDispatch();

  const [gameDataLoaded, setGameDataLoaded] = useState(false);

  let params = useParams();
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${params.game}?key=${RAWG_API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .then(() => setGameDataLoaded(true))
      .catch((err) => console.error(err));
  }, [params.game]);

  return (
    <div className="gamePage">
      <Nav links="cart" />

      {gameDataLoaded ? (
        <div className="gamePage__container">
          <div className="gamePage__box">
            <h2 className="gamePage__title">{gameData?.name}</h2>
            <img
              className="gamePage__image"
              src={gameData?.background_image}
              alt=""
            />
            <ul className="gamePage__developers line-break">
              <span className="gamePage__value">Developers:</span> {"     "}
              {gameData?.developers?.map((item, index) => {
                if (index < 3) {
                  return (
                    <li className="gamePage__developer" key={index}>
                      {item.name}
                      {index !== 2 &&
                        index !== gameData.developers.length - 1 &&
                        ","}
                    </li>
                  );
                }
              })}
            </ul>
            <p className="gamePage__rating line-break">
              <span className="gamePage__value">Rating:</span>
              {Math.round(gameData?.rating * 10) / 10} / 5.0
            </p>
            <ul className="gamePage__genres line-break">
              <span className="gamePage__value">Genres:</span>
              {gameData?.genres?.map((item, index) => {
                if (index < 5) {
                  return (
                    <li className="gamePage__genre" key={index}>
                      {item.name}
                      {index !== 4 &&
                        index !== gameData.genres.length - 1 &&
                        ","}
                    </li>
                  );
                }
              })}
            </ul>
            <p className="gamePage__description line-break">
              {gameData?.description_raw}
            </p>
            <span className="line-break"></span>
            {gameDataLoaded && (
              <button
                className="gamePage__addToCartBtn "
                onClick={() => dispatch(add(gameData))}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="gamePage__container">
          <div className="gamePage__box">
            <h2 className="gamePage__title">
              <Skeleton width="250px" height="32px" />
            </h2>
            <Skeleton width="100%" height="400px" />
            <ul className="gamePage__developers line-break">
              <Skeleton height="16px" width="200px" />
            </ul>
            <p className="gamePage__rating line-break">
              <Skeleton height="16px" width="100px" />
            </p>
            <ul className="gamePage__genres line-break">
              <Skeleton height="16px" width="350px" />
            </ul>
            <p className="gamePage__description line-break">
              <Skeleton height="150px" width="100%" />
            </p>
            <span className="line-break"></span>
            <div className="center">
              <Skeleton  height="32px" width="150px" borderRadius="20px" />
            </div>
            
          </div>
        </div>
      )}

      <CartButton />
      <Footer />
    </div>
  );
};

export default Game;
