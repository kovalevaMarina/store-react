import './main.scss';
import saleImg from '../../../assets/img/sale.png';

function Sale() {
  return (
    <aside className="sale">
      <div className="sale-item">
        <div className="sale-img">
          <img
            className="sale-img__picture"
            src={saleImg}
            alt="Sale informarion"
          />
        </div>
        <p className="sale-item__txt">
          Choose products in the catalog at favorable prices
        </p>
      </div>
    </aside>
  );
}

export default Sale;
