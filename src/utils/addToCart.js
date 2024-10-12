export const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };

  export const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  
  export const updateQuantity = (cartItems, id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };

  export const removeItem = (cartItems, id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };

  export const clearCart = () => {
    localStorage.removeItem('cart');
  };