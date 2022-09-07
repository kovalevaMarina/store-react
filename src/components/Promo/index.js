import './main.scss';
import PromoRoute from './PromoRoute';
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
        <PromoRoute />
        <div className="promo-middle">
          <h1 className="promo-title title-h1">Aluminub club</h1>
          <h2 className="promo-title title-h2">Experience ray-ban</h2>
        </div>
      </div>
    </section>
  );
}

export default Promo;
