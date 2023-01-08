import React, { useState } from "react";
import ContainerShop from "./components/Container/ContainerShop";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import PageProduct from "./components/PageProduct/PageProduct";
import Category from "./components/Categoty/Category";
import { BasketContext } from "./components/context";
import BasketContainer from "./components/Basket/BacketContainer";

function App() {
  const [basket, setBasket] = useState([])
  return (
    <BasketContext.Provider value={{
      basket,
      setBasket
    }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ContainerShop />} />
            <Route path="shop/:id" element={<PageProduct />} />
            <Route path="shop/category/:category" element={<Category />} />

            <Route path="basket" element={<BasketContainer />} />
          </Route>
        </Routes>
      </div>
    </BasketContext.Provider>

  )
}

export default App
