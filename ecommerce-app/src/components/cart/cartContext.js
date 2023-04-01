import React, { createContext, useContext, useReducer } from "react";
import { searchReducer, searchState } from "../search/searchReducer";
import { reducer, initialState } from "./reducer";

export const Cart = createContext();

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    const [ queryState, queryDispatch] = useReducer(searchReducer, searchState);

    return (
        <Cart.Provider value={{state, dispatch, queryState, queryDispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;

export function useCartState() {
    return useContext(Cart);
}
