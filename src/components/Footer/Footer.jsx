import React from 'react'
import logo from "../../assets/logo.png"
import home from "../../assets/home.png"
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import "../Footer/footer.css"
import { NavLink } from 'react-router-dom'

export default function Footer({ styleProps }) {
  return (
    <footer className="footer" style={{ backgroundColor: styleProps.backgroundCart, color: styleProps.textColor }}>
      <div className="footer-logo">
        <NavLink to="/menu-page">
        <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="footer-about">
        <h3>ПРО НАС</h3>
        <p><img src={home} alt="" /> м. Вінниця, площа Калічанська, 2</p>
        <p><img src={email} alt="" /> univermagv@gmail.com</p>
        <p><img src={phone} alt="" /> +38 068 557 61 59</p>
      </div>
      <div className="footer-navigation">
        <h3>НАВІГАЦІЯ</h3>
        <ul>
          <li>
            <NavLink to="/menu-page">
            Меню
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-page">
            Про нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts-page">
            Контакти
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
