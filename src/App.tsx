import React from "react";
import "./App.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routs";
import CartContextProvider from "./context/cartContext";
function App() {
  const router = useRoutes(routes)

  return (
    
    <CartContextProvider>
    <div className="app">
     <Header />

      {/* Start Content */}

      {router}

      {/* Finish Content */}

      <footer>
        <a target={"_blank"} href="https://sabzlearn.ir">
          Pouria.ir
        </a>
      </footer>
    </div>
    </CartContextProvider>
  );
}

export default App;
