import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Cart = createContext(null);

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
