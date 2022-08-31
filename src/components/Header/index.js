import './main.scss';

function Header() {
  const headerSelect = [
    {
      label: 'Language:',
      id: 'languages',
      option: 'English',
      class: 'language-select select',
    },
    {
      label: 'Currency:',
      id: 'currencies',
      option: 'USD',
      class: 'currency-select select',
    },
  ];

  const arrMenu = ['Account', 'Wishlist', 'Checkout', 'Log In', 'Sign Up'];

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <div className="header-left">
            {headerSelect.map((item) => {
              return (
                <div className={item.id}>
                  <label className="label" for={item.id}>
                    {item.label}
                  </label>
                  <select className={item.class} id={item.id}>
                    <option value={item.option}>{item.option}</option>
                  </select>
                </div>
              );
            })}
          </div>
          <div className="header-right">
            <nav className="nav">
              <ul className="menu-list">
                {arrMenu.map((elem) => {
                  return (
                    <li className="menu-list__item">
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
    </header>
  );
}

export default Header;
