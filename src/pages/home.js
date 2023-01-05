import React from 'react';
import "./home.css"
import Nav from "../components/nav" 
import CartButton from '../components/cartButton';

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <CartButton />
    </div>
  );
}

export default Home;
