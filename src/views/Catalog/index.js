import { useContext, useEffect } from 'react';
import { ContextProducts } from '../../store/context';
import Catalog from '../../components/Catalog';
import PromoRoute from '../../components/Promo/PromoRoute';

function CatalogPage() {
  const { products, setProducts } = useContext(ContextProducts);
  const apiProduct = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(apiProduct)
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
      <Catalog text={'All product'} />
    </>
  );
}

export default CatalogPage;
