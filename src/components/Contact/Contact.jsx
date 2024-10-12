import React from 'react'
import delivery from '../../assets/delivery_pizza.jpg'
import grid1 from '../../assets/grid1.jpg'
import grid2 from '../../assets/grid2.jpg'
import grid3 from '../../assets/grid3.jpg'

import '../Contact/contact.css'

export default function Contact() {
  return (
    <div className="сontainer ">
      <div className="delivery">
        <h2>Доставка</h2>
        <p><b>Доставка піци з піцерії додому</b> – це зручний спосіб отримати улюблену страву без необхідності виходити з дому. Ще гаряча, ароматна піца з хрусткою скоринкою приїжджає прямо до ваших дверей. У меню можна знайти різноманітні варіанти – від класичних до авторських, з цікавими поєднаннями інгредієнтів. Доставка здійснюється швидко, щоб ви могли насолодитися свіжою піцою вдома, будь то сімейна вечеря або затишний вечір з друзями.</p>
        <p>Телефон для замовлення: <b>+38 068 557 61 59</b></p>
        <img src={delivery} alt="delivery" style={{ width: '95%', height: '60%', objectFit: 'cover', display: 'block', margin: '0 auto' }}/>
      </div>
      <div className="contacts">
        <h2>Контакти</h2>
        <p><b>Наша адреса:</b> м. Вінниця, площа Калічанська, 2</p>
        <p><b>Номер телефону:</b> +38 068 557 61 59</p>
        <p>Наша піцерія – це справжнє місце для гурманів, де кожна піца готується з любов'ю та тільки з найсвіжіших інгредієнтів, створюючи ідеальне поєднання смаку й атмосфери.</p>
        <div className="grid_img">
          <img src={grid1} alt="" style={{ width: '100%', objectFit: 'cover', display: 'block' }}/>
          <img src={grid3} alt="" style={{ width: '100%', objectFit: 'cover', display: 'block' }}/>
        </div>
      </div>
    </div>
  )
}
