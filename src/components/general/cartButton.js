import React, { useEffect, useState } from "react";
import "./cartButton.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.games);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    console.log(cart);
    let i = 0;
    cart.forEach((game) => {
      i += game.amount;
    });
    setItemsInCart(i);
  }, [cart]);

  return (
    <Link to="/cart" className="cartBtn">
      <ShoppingCartIcon className="cartBtn__img" />
      {itemsInCart > 0 && <div className="cartBtn__number">{itemsInCart}</div>}
    </Link>
  );
};

export default CartButton;
