import React, { useEffect, useState } from "react";
import Nav from "../components/general/nav";
import Footer from "../components/general/footer";
import { useSelector } from "react-redux";
import GameCart from "../components/cart/gameCart";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.games);
  const [itemsInCart, setItemsInCart] = useState(0);

  const SALES_TAX = 0.07;

  useEffect(() => {
    console.log(cart);
    let i = 0;
    cart.forEach((game) => {
      i += game.amount;
    });
    setItemsInCart(i);
  }, [cart]);

  return (
    <div className="cart">
      <Nav links="cart" />
      <div className="cart__container">
        <h1 className="cart__title">Cart</h1>
        {cart.length > 0 ? (
          <div className="cart__gameValues">
            <div className="cart__left">
              <h4 className="cart__gameValueTitle">Title</h4>
            </div>
            <div className="cart__right">
              <h4 className="cart__gameValueAmount">Amount</h4>
              <h4 className="cart__gameValuePrice">Price</h4>
            </div>
          </div>)
          :
          <h2 className="cart__empty">Your Cart is Empty.
          <br />
          <span className="pink">Add some games and come back!</span>
          </h2>
        }

        {cart?.map((game) => {
          return <GameCart key={game.payload.id} game={game} />;
        })}
        {cart.length > 0 && (
          <div className="cart__price">
            <p className="cart__subtotal">
              Subotal: ${(itemsInCart * 59.99).toFixed(2)}
            </p>
            <p className="cart__tax">
              Tax: ${(itemsInCart * 59.99 * SALES_TAX).toFixed(2)}
            </p>
            <p className="cart__total">
              Total: ${(itemsInCart * 59.99 * (1 + SALES_TAX)).toFixed(2)}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
