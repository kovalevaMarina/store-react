import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { ContextProducts } from '../../store/context';
import CatalogTitle from './CatalogTitle';
import Sale from './Sale';
import { useContext } from 'react';

function Catalog({ text }) {
  const { products, setProducts } = useContext(ContextProducts);

  return (
    <section className="catalog">
      <div className="container">
        <CatalogTitle text={text} />
        <div className="catalog-wrap">
          <div className="catalog-list">
            {products.map((product) => {
              return (
                <div className="catalog-list__item">
                  <div className="catalog-list__img">
                    <img
                      className="catalog-list__img--photo"
                      src={product.image}
                    />
                  </div>
                  <div className="catalog-list__item-info">
                    <div className="catalog-list__item-txt">
                      <h4 className="catalog-list__item-title">
                        {product.title}
                      </h4>
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
