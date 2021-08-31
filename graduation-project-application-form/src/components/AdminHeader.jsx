/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Enpara.com_logo.png';
import { LoginContext } from '../Context/LoginContext';
import '../styles/header.scss';

const AdminHeader = () => {
  const { logout } = useContext(LoginContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <nav>
        <Link to="/admin">
          <img
            data-testid="img"
            src={Logo}
            alt="logo"
            className="logo"
            style={{ marginBottom: '20px' }}
          />
        </Link>

        <div className="nav-buttons">
          <Link to="/">
            <div
              data-testid="cikis-yap"
              className="loginbutton"
              role="button"
              onClick={() => handleLogout()}
            >
              Çıkış Yap
            </div>
          </Link>
        </div>
      </nav>
      <ul>
        <li>
          <Link data-testid="basvurular" to="/admin">
            Başvurular
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AdminHeader;
