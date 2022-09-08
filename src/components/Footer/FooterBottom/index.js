import './main.scss';

function FooterBootom() {
  const arrMenuFooter = [
    'About Us',
    'Delivery & Returns',
    'Terms & Conditions',
    'Contact Us',
  ];
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom__wrap">
          <div className="footer-bottom__copyright">
            <p>© Copyright 2013 Css Author, All Rights Reserved.</p>
          </div>
          <nav className="nav">
            <ul className="menu-list">
              {arrMenuFooter.map((elem, i) => {
                return (
                  <li key={i} className="menu-list__item">
                    <a className="menu-list__link" href="#">
                      {elem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FooterBootom;
