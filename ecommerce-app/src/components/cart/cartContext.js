import React, { createContext, useContext, useReducer } from "react";
import { Api } from "../api/api";
import { reducer } from "./reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const { data } = Api(
        "https://api.noroff.dev/api/v1/online-shop"
      );

    const products = [...data].map((product) => ({
        title: product.title,
        id: product.id,
        image: product.imageUrl,
        price: product.price,
    }))

    console.log(products)
    const [state, dispatch] = useReducer(reducer, {
        products: products,
        cart: []
    })

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

export const CartState = () => {
    return useContext(CartContext);
}