import React from 'react';
import "./home.css"
import Nav from "../components/nav" 
import CartButton from '../components/cartButton';
import HomeHeader from '../components/homeHeader';

const Home = () => {
  return (
    <div className='home'>
      <Nav links="home"/>
      <CartButton />
      <HomeHeader />
    </div>
  );
}

export default Home;
