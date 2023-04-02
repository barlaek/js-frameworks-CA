import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Cart = createContext();

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;

export function useCartState() {
    return useContext(Cart);
}