import './main.scss';
import PromoRoute from '../../components/Promo/PromoRoute';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextBasket } from '../../store/context';

function ProductItem() {
  const { productId } = useParams();
  const apiProduct = `https://fakestoreapi.com/products/${productId}`;
  const [product, setProduct] = useState(null);
  const { basket, setBasket } = useContext(ContextBasket);

  useEffect(() => {
    fetch(apiProduct)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  const addToBasket = () => {
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
    <>
      <section className="route" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="container">
          <PromoRoute />
        </div>
      </section>
      {product ? (
        <section className="product">
          <div className="container">
            <div className="product-item">
              <div className="product-item__img">
                <img
                  className="product-item__img--photo"
                  src={product.image}
                ></img>
              </div>
              <div className="product-item__info">
                <h2 className="product-item__info--title">{product.title}</h2>
                <p className="product-item__info--txt">{product.description}</p>
                <p className="product-item__info--price">
                  Price: ${product.price}
                </p>
                <button className="btn-basket" onClick={addToBasket}>
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductItem;
