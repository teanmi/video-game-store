import React from "react";
import "./cartButton.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = () => {
  return <div className="cart">
    <ShoppingCartIcon className="cart__img"/>
    {/* <div className="cart__number" >
      3
    </div> */}
  </div>;
};

export default CartButton;
