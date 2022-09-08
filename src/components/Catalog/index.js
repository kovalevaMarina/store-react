import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { ContextProducts } from '../../store/context';
import CatalogTitle from './CatalogTitle';
import Sale from './Sale';
import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Catalog({ text }) {
  const { products, setProducts } = useContext(ContextProducts);
  console.log(useParams());

  const apiProduct = 'https://fakestoreapi.com/products';
  useEffect(() => {
    fetch(apiProduct)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

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
                    <button className="catalog-list__item-btn">
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
