import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { addToCart } from '../../utils/cartUtils'; 
import banner from '../../assets/banner.jpg';
import '../Menu/menu.css';

export default function Menu({ styleProps }) {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then(data => {
        setMenuData(data.menu);
        setLoading(false);
      })
      .catch(err => {
        setError('Не вдалося завантажити меню');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Завантаження меню...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <img className='banner' src={banner} alt="banner" style={{ width: '100vw', height: '60vh', objectFit: 'cover', display: 'block' }} />
      <h1>МЕНЮ</h1>
      <hr style={{ width: '80%', backgroundColor: '#ffaf97', height: '2px', border: 'none' }} />
      <h2>СТРАВИ</h2>
      <hr style={{ width: '70%', backgroundColor: '#ffaf97', height: '2px', border: 'none' }} />
      
      {menuData && Object.keys(menuData.dishes).map(category => (
        <div key={category}>
          <h3>{category.toUpperCase()}</h3>
          <div className="dishes">
            {menuData.dishes[category].map(dish => (
              <div key={dish.id} className="dish" style={{ backgroundColor: styleProps.backgroundCart }}>
                <img className='dishImg' src={dish.img} alt={dish.name} />
                <h4>{dish.name}</h4>
                <p>{dish.description}</p>
                <div className="addToCart">
                  <p className='price'>Ціна: {dish.price} грн</p>
                  <button onClick={() => addToCart(dish)}>Додати</button> 
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <hr style={{ width: '70%', backgroundColor: '#ffaf97', height: '2px', border: 'none' }} />
      <h2>НАПОЇ</h2>
      <hr style={{ width: '70%', backgroundColor: '#ffaf97', height: '2px', border: 'none' }} />
      
      {menuData && Object.keys(menuData.drinks).map(category => (
        <div key={category}>
          <h3>{category.toUpperCase()}</h3>
          <div className="drinks">
            {menuData.drinks[category].map(drink => (
              <div key={drink.id} className="drink" style={{ backgroundColor: styleProps.backgroundCart }}>
                <img className='dishImg' src={drink.img} alt={drink.name} />
                <h4>{drink.name}</h4>
                <p>{drink.description}</p>
                <div className="addToCart">
                  <p className='price'>Ціна: {drink.price} грн</p>
                  <button onClick={() => addToCart(drink)}>Додати</button> 
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}