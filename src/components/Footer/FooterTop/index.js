import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhone } from '@fortawesome/free-solid-svg-icons';

function FooterTop() {
  const infoDelivery = [
    {
      img: (
        <FontAwesomeIcon
          icon={faTruck}
          style={{ width: '30px', height: '30px' }}
        />
      ),
      text: 'free shiping on orders over 100$',
      class: 'footer-delivery',
      id: 1,
    },

    {
      img: (
        <FontAwesomeIcon
          icon={faPhone}
          style={{ width: '30px', height: '30px' }}
        />
      ),
      text: 'call us! toll free 409-8888-0099',
      class: 'footer-phone',
      id: 2,
    },
  ];
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top__wrap">
          {infoDelivery.map((elem) => {
            return (
              <div key={elem.id} className={elem.class}>
                <div className="footer-delivery__img">{elem.img}</div>
                <p className="footer-delivery__txt">{elem.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
