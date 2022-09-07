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
          Click the link below for more information
        </p>
        <button className="sale-btn">More</button>
      </div>
    </aside>
  );
}

export default Sale;
