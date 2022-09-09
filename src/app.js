import './style.scss';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ContextProducts, ContextBasket } from './store/context';
import Layout from './components/Layout';
import Home from './views/Home';
import CatalogPage from './views/Catalog';
import Electronics from './views/Electronics';
import Jewelery from './views/Jawelery';
import MenClothing from './views/MenClothing';
import WomenClothing from './views/WomenClothing';
import ErrorPage from './views/Error';
import ProductItem from './views/Product';
import BasketPage from './views/Basket';

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  return (
    <ContextProducts.Provider value={{ products, setProducts }}>
      <ContextBasket.Provider value={{ basket, setBasket }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="catalog/:productId" element={<ProductItem />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="men" element={<MenClothing />} />
              <Route path="women" element={<WomenClothing />} />
              <Route path="basket" element={<BasketPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextBasket.Provider>
    </ContextProducts.Provider>
  );
};

export default App;
