import React, { useEffect } from "react";
import "./cartButton.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.games);

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  return (
    <Link to="/cart" className="cart">
      <ShoppingCartIcon className="cart__img" />
      <div className="cart__number">{cart.length}</div>
    </Link>
  );
};

export default CartButton;
