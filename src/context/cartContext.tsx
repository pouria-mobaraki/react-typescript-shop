import { Children, createContext, useState } from "react";
import { Product } from "../components/Products.types";

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

const cartContextProvider = ({children}:CartContextProviderProps) => {
    
     const [UserCart,setUserCart] = useState<Product[]>([])
     const [shop,setShop] = useState<Product[]>([])
     

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