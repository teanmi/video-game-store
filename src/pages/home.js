import React from "react";
import Nav from "../components/nav";
import CartButton from "../components/cartButton";
import HomeHeader from "../components/homeHeader";
import Games from "../components/games";

const Home = () => {
  
  

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
