import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const itemsIndex = cartItems.findIndex(item => item.id === product.id);

        if (itemsIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[itemsIndex].quantity += 1;
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;