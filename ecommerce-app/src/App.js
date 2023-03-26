import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home, Contact, Cart } from "./components/navigation/nav";
import { Product } from "./components/products/product";

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/:id" element={<Product />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App;