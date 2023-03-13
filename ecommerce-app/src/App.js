import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home, Contact, Cart } from "./components/navigation/nav";
import { API } from "./components/api/api";

function App() {
  const { data, isLoading, isError } = API(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (isLoading) {
    return <div>isLoading</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App;