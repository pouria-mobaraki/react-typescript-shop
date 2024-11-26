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

export const cartContext = createContext({} as cartContextType)

const CartContextProvider = ({children}:CartContextProviderProps) => {
    
     const [UserCart,setUserCart] = useState<Product[]>([])
     const [shop,setShop] = useState<Product[]>([])
     

     useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data => setShop(data)
        )
     },[])

    const addProduct = (id:number) => {setUserCart(prevProducts => {
        const mainProductInCart = UserCart.find(product => product.id ===id)

        if(mainProductInCart){
          return prevProducts.map(product => {
            if(product.id === id){
                return {...product,count:product.count + 1}
            }else{
                return product
            }
           })
        }else{
            const mainProductInShop = shop.find(product => product.id === id) as Product
          return [...prevProducts,{...mainProductInShop,count:1}]
        }

        
    })}
    const  removeProduct = (id:number) => {setUserCart(prevProducts => prevProducts.filter(product => product.id !== id))}
    const  removeAll= ()=> {setUserCart([])}
    
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