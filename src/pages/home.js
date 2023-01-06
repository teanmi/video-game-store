import React from "react";
import Nav from "../components/nav";
import CartButton from "../components/cartButton";
import HomeHeader from "../components/homeHeader";
import Games from "../components/games";
import { RAWG_API_KEY } from "../apiKey";

const Home = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30fac0e023mshc7c5d1f1684fb73p182a44jsndaa7317df460',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      
    }
  };
  
  // fetch(`https://rawg-video-games-database.p.rapidapi.com/games/god-of-war-ragnarok?key=${RAWG_API_KEY}`, options)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.error(err));

  return (
    <div className="home">
      <Nav links="home" />
      <CartButton />
      <HomeHeader />
      <Games />
    </div>
  );
};

export default Home;
