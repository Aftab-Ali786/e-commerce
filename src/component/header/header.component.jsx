import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/crown.svg'; // Static image import
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={Logo} alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
    </div>
  </div>
);

export default Header;
