import React, { useState, useEffect } from 'react';
import trashIcon from '../../assets/trash.png'; 
import { loadCart, calculateTotal, updateQuantity, removeItem, clearCart } from '../../utils/addToCart'; 

import '../Cart/cart.css';

export default function Cart({ styleProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = loadCart(); 
    setCartItems(cart);
    setTotal(calculateTotal(cart));
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = updateQuantity(cartItems, id, quantity); 
    setCartItems(updatedCart);
    setTotal(calculateTotal(updatedCart)); 
  };

  const handleRemoveItem = (id) => {
    const updatedCart = removeItem(cartItems, id); 
    setCartItems(updatedCart);
    setTotal(calculateTotal(updatedCart)); 
  };

  const handleClearCart = () => {
    clearCart(); 
    setCartItems([]); 
    setTotal(0); 
  };

  return (
    <div className="cart-container" >
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина порожня</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item" style={{ backgroundColor: styleProps.backgroundCart }} >
              <img src={item.img} alt={item.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '20px', marginLeft: '10px'}} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p><b>Ціна:</b> {item.price} грн</p>
                <p><b>Кількість:</b></p>
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <p><b>Вартість:</b> {item.price * item.quantity} грн</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>
                <img src={trashIcon} alt="Видалити"/>
              </button>
            </div>
          ))}
          <h3 className="total_title">Загальна вартість: {total} грн</h3>
          <button className="clear_cart" onClick={handleClearCart}>Очистити корзину</button>
        </>
      )}
    </div>
  );
}