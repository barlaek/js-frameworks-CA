import React, { createContext, useContext, useReducer } from "react";
import { Api } from "../api/api";
import { reducer } from "./reducer";

export const Cart = createContext();

const CartContext = ({ children }) => {
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

    const initialState = { products: products, cart: [] }

    console.log(initialState)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;

export const CartState = () => {
    return useContext(Cart);
}