import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link className="logo" to="/">
          Pouria Shop
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="shop-icon" />
          <span>2</span>
        </Link>
      </header>
    </div>
  );
}

export default Header;
