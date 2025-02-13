import React, { useState } from 'react';
import logo from '../images/logo.jpg'; // Make sure to add your logo image in the images folder
import '../styles/style.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    alert('Login successful!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Background Image */}
      <img src="/bg.jpg" className="bg" alt="Background" />

      {/* Navigation Section */}
      <header className="navbar">
        <nav id="site-top-nav" className="navbar-menu navbar-fixed-top">
          <div className="container">
            <div className="logo">
              <a href="/" title="Logo">
                <img src={logo} alt="Logo" className="img-responsive" />
              </a>
            </div>
            <div className="menu text-right">
              <ul>
                <li><a className="hvr-underline-from-center" href="/">Home</a></li>
                <li><a className="hvr-underline-from-center" href="/flowers">Flowers</a></li>
                <li><a className="hvr-underline-from-center" href="/order">Order</a></li>
                <li><a className="hvr-underline-from-center" href="/contact">Contact</a></li>
                <li><a className="hvr-underline-from-center" href="/login">Login</a></li>
                <li>
                  <a href="/order" className="btn-primary">Confirm Order</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Welcome Message */}
      <div className="greeting">
        <h2>Welcome to the Flower Shop💐💐!!</h2>
        <h3>{new Date().getHours() < 12 ? "Good Morning! 🌞" : 
             new Date().getHours() < 18 ? "Good Afternoon! 🌤️" : 
             "Good Evening! 🌙"}</h3>
      </div>

      {/* Login Section */}
      <section className="login">
        <div className="container">
          <h2 className="text-center">Login</h2>
          <div className="heading-border"></div>

          <form onSubmit={handleSubmit} className="form">
            <fieldset>
              <legend>Login</legend>
              <p className="label">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
                value={formData.email}
                onChange={handleChange}
              />
              <p className="label">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                required
                value={formData.password}
                onChange={handleChange}
              />
              <input type="submit" value="Login" className="btn-primary" />
            </fieldset>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div className="container">
          <div className="grid-3">
            <div className="text-center">
              <h3>About Us</h3><br />
              <p>🌸 Bloom with Us! Fresh, elegant, and beautifully crafted flowers for every occasion. 🌹💐 #FlowerMagic #BlossomEveryday</p>
            </div>
            <div className="text-center">
              <h3>Site Map</h3><br />
              <div className="site-links">
                <a href="/flowers">Flowers</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
              </div>
            </div>
            <div className="social-links">
              <h3>Social Links</h3><br />
              <div className="social">
                <ul>
                  <li><img src="https://img.icons8.com/color/48/null/facebook-new.png" alt="facebook"/></li>
                  <li><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="instagram"/></li>
                  <li><img src="https://img.icons8.com/color/48/null/twitter--v1.png" alt="twitter"/></li>
                  <li><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" alt="linkedin"/></li>
                  <li><img src="https://img.icons8.com/color/48/null/youtube-play.png" alt="youtube"/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
