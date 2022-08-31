function Navigation(arrLinks) {
  return (
    <nav className="nav">
      {arrLinks.map((link) => {
        return (
          <ul className="menu-list">
            <li className="menu-list__item">
              <a className="menu-list__link" href="#">
                {link}
              </a>
            </li>
          </ul>
        );
      })}
    </nav>
  );
}

export default Navigation;
