import React from "react";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/cart/cartContext";
import { Layout } from "./components/layout/layout";
import { Home, Contact, CartContainer } from "./components/navigation/nav";
import { Product } from "./components/products/product";

function App() {

  return (
  <div>
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartContainer />} />
          <Route path="/:id" element={<Product />} />
        </Route>
      </Routes>
    </CartContextProvider>
  </div>
  )
}

export default App;