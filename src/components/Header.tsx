import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";

function Header() {

  const cart = useContext(cartContext)

  return (
    <div>
      <header>
        <Link className="logo" to="/">
          Pouria Shop
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="shop-icon" />
          <span>{cart.UserCart.length}</span>
        </Link>
      </header>
    </div>
  );
}

export default Header;
