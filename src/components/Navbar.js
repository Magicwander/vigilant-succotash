import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/style.css';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <nav id="site-top-nav" className="navbar-menu navbar-fixed-top">
        <div className="container">
          <div className="logo">
            <Link to="/" title="Logo">
              <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" className="img-responsive" />
            </Link>
          </div>

          <div className="menu text-right">
            <ul>
              <li><Link className="hvr-underline-from-center" to="/">Home</Link></li>
              <li><Link className="hvr-underline-from-center" to="/flowers">Flowers</Link></li>
              <li><Link className="hvr-underline-from-center" to="/order">Order</Link></li>
              <li><Link className="hvr-underline-from-center" to="/contact">Contact</Link></li>
              <li><Link className="hvr-underline-from-center" to="/login">Login</Link></li>
              <li>
                <Link to="/cart" className="cart-icon">
                  🛒 {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
