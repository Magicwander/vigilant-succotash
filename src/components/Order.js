import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add some items to your cart first!');
      navigate('/flowers');
      return;
    }

    // Here you would typically send the order data to your backend
    const orderData = {
      ...formData,
      items: cart,
      total: getCartTotal()
    };
    console.log('Order submitted:', orderData);
    
    // Clear cart and show success message
    clearCart();
    alert('Order submitted successfully!');
    navigate('/');
  };

  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} className="bg" alt="Background" />
      <div style={{ height: '80px' }}></div>
      <section className="order">
        <div className="container">
          <h2 className="text-center">Fill this form to confirm your order.</h2>
          
          {cart.length > 0 && (
            <div className="order-summary">
              <h3>Order Summary</h3>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} - LKR{parseInt(item.price.replace('LKR', '')) * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="total">Total: LKR{getCartTotal()}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="form">
            <fieldset>
              <legend>Delivery Details</legend>
              <p className="label">Full Name</p>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name..."
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <p className="label">Phone Number</p>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone..."
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <p className="label">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
                value={formData.email}
                onChange={handleChange}
              />
              <p className="label">Address</p>
              <input
                type="text"
                name="address"
                placeholder="Enter your address..."
                required
                value={formData.address}
                onChange={handleChange}
              />
              <input type="submit" value="Confirm Order" className="btn-primary" />
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default Order;
