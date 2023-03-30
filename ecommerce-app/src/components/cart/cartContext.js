import React, { createContext, useContext, useReducer } from "react";
import { Api } from "../api/api";
import { reducer } from "./reducer";

export const Cart = createContext();

const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, GetProducts)

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

export const GetProducts = () => {
    const { data, isLoading, isError } = Api(
        "https://api.noroff.dev/api/v1/online-shop"
      );

      if(isLoading) {
        return <div>Loading</div>
      }

      if(isError) {
        return <div>Error</div>
      }
    
    let productData = data.find(product => product.id)
    // const products = [...data].map((product) => ({
    //     title: product.title,
    //     id: product.id,
    //     image: product.imageUrl,
    //     price: product.price,
    // }))

    console.log(productData)

    return productData;
}

const { products } = GetProducts;
const initialState = { products: products, cart: [] }

console.log(initialState)