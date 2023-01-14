import React from "react";
import Nav from "../components/general/nav";
import CartButton from "../components/general/cartButton";
import HomeHeader from "../components/home/homeHeader";
import Games from "../components/home/games";
import HomeValues from "../components/home/homeValues"
import Footer from "../components/general/footer";
import "./home.css"

const Home = () => {
  
  

  return (
    <div className="home">
      <Nav links="home" />
      <CartButton />
      <HomeHeader />
      <Games />
      <HomeValues />
      <Footer />
    </div>
  );
};

export default Home;
