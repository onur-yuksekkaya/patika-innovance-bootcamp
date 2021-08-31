import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Enpara.com_logo.png';
import '../styles/header.scss';
import '../styles/button.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <div className="nav-buttons">
          <Link to="/login">
            <div className="loginbutton">Giriş Yap</div>
          </Link>

          <Link to="/application">
            <button type="button">Başvuru Oluştur</button>
          </Link>
        </div>
      </nav>
      <ul>
        <li>
          <Link data-testid="basvuru" to="/application">
            Başvuru
          </Link>
        </li>
        <li>
          <Link data-testid="basvuru-sorgula" to="/app-status">
            Başvuru Sorgula
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
