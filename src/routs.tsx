import React from "react";
import App from "./App";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home/Home";


const routes = [
    {path: '/' , element: <Home />},
    {path: '/cart' , element: <Cart />}
]

export default routes