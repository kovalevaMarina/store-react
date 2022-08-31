import './main.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faTags,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import promo_bg from '../../assets/img/promo_bg.jpg';

function Promo() {
  return (
    <section
      className="promo"
      style={{
        backgroundImage: `url(${promo_bg})`,
        height: '650px',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="promo-wrap">
          <div className="promo-top">
            <div className="logo">
              <Link className="logo-txt txt--uppercase" to={'/'}>
                Leo Shop
              </Link>
            </div>
            <ul className="route-list">
              <Link className="route-list__item" to={'/Link1'}>
                Link1
              </Link>
              <Link className="route-list__item" to={'/Link2'}>
                Link2
              </Link>
              <Link className="route-list__item" to={'/Link3'}>
                Link3
              </Link>
              <Link className="route-list__item" to={'/Link4'}>
                Link4
              </Link>
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
                <Link className="cart-item " to={'/basket'}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: 'white' }}
                  />
                </Link>
              </div>
              <Link className="basket-item" to={'/basket'}>
                Count(0)
              </Link>
            </div>
          </div>
          <div className="promo-middle">
            <h1 className="promo-title title-h1">Aluminub club</h1>
            <h2 className="promo-title title-h2">Experience ray-ban</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
