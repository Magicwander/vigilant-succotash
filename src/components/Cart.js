import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (flowerId, newQuantity) => {
    updateQuantity(flowerId, parseInt(newQuantity));
  };

  const handleCheckout = () => {
    navigate('/order');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <h2>Your Cart is Empty</h2>
          <p>Add some beautiful flowers to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <section className="cart">
      <div className="container">
        <h2 className="text-center">Your Cart</h2>
        <div className="heading-border"></div>
        
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} className="img-responsive img-curve" />
              </div>
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="flower-bouquet-price">{item.price}</p>
                <div className="quantity-controls">
                  <button 
                    className="btn-quantity"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                  <button 
                    className="btn-quantity"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="btn-delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: LKR {getCartTotal()}</h3>
          <button className="btn-primary" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
