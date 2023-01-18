import React from "react";
import Nav from "../components/general/nav";
import Footer from "../components/general/footer";
import { useSelector } from "react-redux";
import GameCart from "../components/cart/gameCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.games);

  return (
    <div>
      <Nav links="cart" />
      {cart?.map((game) => {
        return (
          <GameCart
            key={game.payload.id}
            game={game.payload}
            amount={game.amount}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Cart;
