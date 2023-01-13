import React from "react";
import Nav from "../components/nav";
import CartButton from "../components/cartButton";
import HomeHeader from "../components/homeHeader";
import Games from "../components/games";
import HomeValues from "../components/homeValues"
import Footer from "../components/footer";

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
