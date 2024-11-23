import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div>
      <header>
        <a className="logo" href="#">
          Pouria Shop
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="shop-icon" />
          <span>2</span>
        </a>
      </header>
    </div>
  );
}

export default Header;
