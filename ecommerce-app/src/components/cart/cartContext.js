import React, { createContext, useContext, useReducer } from "react";
import { Api } from "../api/api";
import { reducer } from "./reducer";

export const Cart = createContext(null);

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, )

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;

export const useCartState = () => {
    return useContext(Cart);
}
