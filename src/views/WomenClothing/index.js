import PromoRoute from '../../components/Promo/PromoRoute';
import { useContext, useEffect } from 'react';
import { ContextProducts } from '../../store/context';
import Catalog from '../../components/Catalog';

function WomenClothing() {
  const { products, setProducts } = useContext(ContextProducts);

  const apiElect = `https://fakestoreapi.com/products/category/women's clothing`;
  useEffect(() => {
    fetch(apiElect)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <section className="route" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="container">
          <PromoRoute />
        </div>
      </section>
      <Catalog text={"Women's clothing"} />
    </>
  );
}

export default WomenClothing;
