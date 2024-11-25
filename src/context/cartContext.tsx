import { Children, createContext, useEffect, useState } from "react";
import { Product } from "../components/Products.types";
import { json } from "react-router-dom";

type CartContextProviderProps = {
    children: React.ReactNode;
}


type cartContextType ={
    UserCart : Product[];
    addProduct : (id:number) => void;
    removeProduct: (id:number)=>void;
    removeAll: () => void ;
    shop:Product[]
}

const cartContext = createContext({} as cartContextType)

const CartContextProvider = ({children}:CartContextProviderProps) => {
    
     const [UserCart,setUserCart] = useState<Product[]>([])
     const [shop,setShop] = useState<Product[]>([])
     

     useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data => console.log(data)
        )
     },[])

    const addProduct = (id:number) => {}
    const  removeProduct = (id:number) => {}
    const  removeAll= ()=> {}
    
    return (
    <cartContext.Provider value={{
        addProduct,
        removeProduct,
        removeAll,
        shop,
        UserCart,
    }}>
    {children}
    </cartContext.Provider>
    )
}

export default CartContextProvider