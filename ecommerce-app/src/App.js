import React from "react";
import { Routes, Route } from "react-router-dom";
import CartContext from "./components/cart/cartContext";
import { CheckoutPage } from "./components/checkout/checkout";
import { Layout } from "./components/layout/layout";
import { Home, Contact, CartContainer } from "./components/navigation/nav";
import { Product } from "./components/products/product";

function App() {

  return (
  <div>
    <CartContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartContainer />} />
          <Route path="/:id" element={<Product />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </CartContext>
  </div>
  )
}

export default App;