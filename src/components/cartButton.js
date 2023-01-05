import React from "react";
import "./cartButton.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartButton = () => {
  return <Link to="/cart" className="cart">
    <ShoppingCartIcon className="cart__img"/>
    <div className="cart__number" >
      3
    </div>
  </Link>;
};

export default CartButton;
