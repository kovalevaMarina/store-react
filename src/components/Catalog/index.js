import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { ContextProducts, ContextBasket } from '../../store/context';
import { useContext, useEffect } from 'react';
import CatalogTitle from './CatalogTitle';
import Sale from './Sale';
import { Link } from 'react-router-dom';

function Catalog({ text }) {
  const { products, setProducts } = useContext(ContextProducts);
  const { basket, setBasket } = useContext(ContextBasket);

  const apiProduct = 'https://fakestoreapi.com/products';
  useEffect(() => {
    fetch(apiProduct)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToBasket = (product) => {
    product.quantity = 1;
    if (!basket.some((item) => item.id === product.id)) {
      return setBasket([...basket, product]);
    }
    const newBasket = basket.map((item) => {
      if (item.id === product.id) {
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });
    setBasket(newBasket);
  };

  return (
    <section className="catalog">
      <div className="container">
        <CatalogTitle text={text} />
        <div className="catalog-wrap">
          <div className="catalog-list">
            {products.map((product) => {
              return (
                <div key={product.id} className="catalog-list__item">
                  <div className="catalog-list__img">
                    <img
                      className="catalog-list__img--photo"
                      src={product.image}
                    />
                  </div>
                  <div className="catalog-list__item-info">
                    <div className="catalog-list__item-txt">
                      <Link
                        to={`/catalog/${product.id}`}
                        id={product.id}
                        className="catalog-list__item-title"
                      >
                        {product.title}
                      </Link>
                      <p className="catalog-list__item-price">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => addToBasket(product)}
                      className="catalog-list__item-btn"
                    >
                      <FontAwesomeIcon
                        icon={faBasketShopping}
                        style={{ color: 'white' }}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Sale />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
