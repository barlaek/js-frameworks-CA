import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, Cart, Nav } from "./components/navigation/nav";

function App() {
  return (
  <div>
    <Nav />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  </div>
  )
}

export default App;