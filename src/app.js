import './style.scss';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ContextProducts } from './store/context';
import Layout from './components/Layout';
import Home from './views/Home';
import CatalogPage from './views/Catalog';
import Electronics from './views/Electronics';
import Jewelery from './views/Jawelery';
import MenClothing from './views/MenClothing';
import WomenClothing from './views/WomenClothing';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <ContextProducts.Provider value={{ products, setProducts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="men" element={<MenClothing />} />
            <Route path="women" element={<WomenClothing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProducts.Provider>
  );
};

export default App;
