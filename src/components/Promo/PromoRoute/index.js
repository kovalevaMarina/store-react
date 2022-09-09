import './main.scss';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faTags,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { ContextBasket } from '../../../store/context';
import { useContext } from 'react';

function PromoRoute() {
  const { basket } = useContext(ContextBasket);
  return (
    <div className="promo-top">
      <div className="logo">
        <Link className="logo-txt txt--uppercase" to={'/'}>
          Leo Shop
        </Link>
      </div>
      <ul className="route-list">
        <li className="route-list__item">
          <NavLink
            activeclassname="active"
            className="route-list__link"
            to={'/catalog'}
          >
            catalog
          </NavLink>
        </li>
        <li className="route-list__item">
          <NavLink
            activeclassname="active"
            className="route-list__link"
            to={'/electronics'}
          >
            electronics
          </NavLink>
        </li>
        <li className="route-list__item">
          <NavLink
            activeclassname="active"
            className="route-list__link"
            to={'/jewelery'}
          >
            jewelery
          </NavLink>
        </li>
        <li className="route-list__item">
          <NavLink
            activeclassname="active"
            className="route-list__link"
            to={'/men'}
          >
            men
          </NavLink>
        </li>
        <li className="route-list__item">
          <NavLink
            activeclassname="active"
            className="route-list__link"
            to={'/women'}
          >
            women
          </NavLink>
        </li>
      </ul>
      <div className="promo-input">
        <input
          className="promo-input__search"
          type="text"
          placeholder="Search.."
        ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="cart-wrap">
        <div className="cart-item">
          <a className="sale-cart" href="#">
            <FontAwesomeIcon icon={faTags} style={{ color: 'white' }} />
          </a>
        </div>
        <div className="cart-item">
          <Link className="cart-item" to={'/basket'}>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
          </Link>
        </div>
        <Link className="basket-field" to={'/basket'}>
          Count({basket.length})
        </Link>
      </div>
    </div>
  );
}

export default PromoRoute;
