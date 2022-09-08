import PromoRoute from '../../components/Promo/PromoRoute';

function ErrorPage() {
  return (
    <>
      <section className="route" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="container">
          <PromoRoute />
        </div>
      </section>
      <section className="error-page">
        <div className="container">
          <div
            className="error-page__wrap"
            style={{ padding: '30px 0', textAlign: 'center' }}
          >
            <h1 style={{ marginBottom: '20px' }}>Not found... &#9785;</h1>
            <p>The link is broken or the page has been moved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
