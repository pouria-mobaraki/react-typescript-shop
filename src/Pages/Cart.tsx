import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { cartContext } from "../context/cartContext";
// import { Product } from "../components/Products.types";

export default function Cart() {

  const context = useContext(cartContext)
  return (
    <>
      {context.UserCart.length !== 0 ? ( 
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {context.UserCart.map(product =>(
              <div className="card">
              <img
                src={product.image}
                alt=""
              />
              <main>
                <p>{product.title.slice(0,13)}...</p>
                <div className="card-details">
                  <div>
                  {
                    Array(Math.ceil(product.rating.rate)).fill(0).map((item)=> <AiFillStar style={{color:'orange'}}/>)
                }
                 {
                    Array(5-Math.ceil(product.rating.rate)).fill(0).map((item)=> <AiOutlineStar style={{color:'orange'}}/>)
                }
                  </div>
                  <p>{product.price}</p>
                </div>
                <div className="product-count">
                  <p>Count: {product.count}</p>
                </div>
                <button>Remove From Basket</button>
              </main>
            </div>
            ))
            }
              
            
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
