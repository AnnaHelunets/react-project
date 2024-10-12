import React from 'react';
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import "../Header/header.css";
import Toogle from '../Toogle/Toogle';
import { NavLink } from 'react-router-dom';

export default function Header({ appState, styleProps }) {
  return (
    <header className="header" style={{ backgroundColor: styleProps.backgroundCart, color: styleProps.textColor }}>
      <NavLink to="/menu-page">
      <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <ul className='nav'>
        <li>
          <NavLink to="/menu-page" style={{ color: styleProps.textColor }}>
          МЕНЮ
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-page" style={{ color: styleProps.textColor }}>
          ПРО НАС
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts-page" style={{ color: styleProps.textColor }}>
          КОНТАКТИ
          </NavLink>
        </li>
      </ul>
          <NavLink to="/cart">
          <img className="cart" src={cart} alt="cart" />
          </NavLink>
      <Toogle appState={appState} />
    </header>
  );
}