import './main.scss';
import { useContext } from 'react';
import { ContextBasket } from '../../store/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Basket() {
  const { basket, setBasket } = useContext(ContextBasket);

  const totalResult = () => {
    return basket.reduce((acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity;
    }, 0);
  };

  const addQuantity = (id) => {
    const newBasket = basket.map((item) => {
      if (item.id === id) {
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });
    setBasket(newBasket);
  };

  const minusQuantity = (id) => {
    const newBasket = basket.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
        return item;
      } else {
        return item;
      }
    });
    setBasket(newBasket);
  };

  const removeItemInBasket = (id) => {
    const newBasket = basket.filter((item) => {
      return item.id !== id && item;
    });
    setBasket(newBasket);
  };

  return (
    <section className="basket">
      <div className="container">
        <div className="basket-wrap">
          {basket.map((elem) => {
            return (
              <div className="basket-item" key={elem.id}>
                <div className="basket-item__img">
                  <img className="basket-item__img--photo" src={elem.image} />
                </div>
                <div className="basket-item__info">
                  <Link to={`/catalog/${elem.id}`}>
                    <h4 className="title-h4 basket-item__title">
                      {elem.title}
                    </h4>
                  </Link>
                  <p className="basket-item__category">
                    category: {elem.category}
                  </p>
                </div>
                <div className="basket-item__count">
                  <button
                    onClick={() => minusQuantity(elem.id)}
                    className="basket-item__btn basket-item__btn--remove"
                  >
                    -
                  </button>
                  <span className="basket-item__count--num">
                    {elem.quantity}
                  </span>
                  <button
                    onClick={() => addQuantity(elem.id)}
                    className="basket-item__btn basket-item__btn--add"
                  >
                    +
                  </button>
                </div>
                <div className="basket-item__price">${elem.price}</div>
                <button
                  onClick={() => removeItemInBasket(elem.id)}
                  className="basket-item__trash"
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: '#D62440' }}
                  />
                </button>
              </div>
            );
          })}
          <div className="basket-total">Total: ${totalResult()}</div>
        </div>
      </div>
    </section>
  );
}

export default Basket;
