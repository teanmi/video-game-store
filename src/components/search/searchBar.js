import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchBar.css";
import { useNavigate } from "react-router-dom";
import { RAWG_API_KEY } from "../../apiKey";

const SearchBar = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };

  const [gameName, setGameName] = useState("");
  const navigate = useNavigate();

  const updateGameName = (event) => {
    event.preventDefault();
    setGameName(event.target.value);
  };

  const enterKeyListener = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      searchGame();
    }
  };

  const searchGame = async () => {
    if (gameName === "") {
      alert("Error: No Game Entered");
      return;
    }
    let game = gameName.toLowerCase().split(" ").join("-");

    await fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${game}?key=${RAWG_API_KEY}`,
      options
    )
      .then((response) => {
        if (response.status !== 404) {
          navigate(`/game/${game}`);
        } else {
          alert(`Error: ${game} Not Found`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__row">
          <SearchIcon className="searchBar__img" fontSize="large" />
          <input
            onKeyUp={(event) => enterKeyListener(event)}
            className="searchBar__input"
            type="text"
            placeholder="Enter Game Title"
            value={gameName}
            onChange={(event) => updateGameName(event)}
          />
          <button className="searchBar__btn" onClick={() => searchGame()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
