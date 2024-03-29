import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-logo">
          <img src="main-logo.svg" alt="Main logo" height="24px" />
          <span className="logo">
            Chrono <b>Bump</b>
          </span>
        </div>
        <nav className="header-links">
          <ul>
            <li>
              <Link to={'/'}>Main</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
