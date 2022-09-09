import PromoRoute from '../../components/Promo/PromoRoute';
import Basket from '../../components/Basket';

function BasketPage() {
  return (
    <>
      <section className="route" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="container">
          <PromoRoute />
        </div>
      </section>
      <Basket />
    </>
  );
}
export default BasketPage;
