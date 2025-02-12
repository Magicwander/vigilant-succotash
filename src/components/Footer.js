import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="grid-3">
          <div className="text-center">
            <h3>About Us</h3><br />
            <p>🌸 Bloom with Us! Fresh, elegant, and beautifully crafted flowers for every occasion. 🌹💐 #FlowerMagic #BlossomEveryday</p>
          </div>
          <div className="text-center">
            <div className="site-links">
              <Link to="/flowers">Flowers</Link>
              <Link to="/order">Order</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="social-links">
            <h3>Social Links</h3><br />
            <div className="social">
              <ul>
                <li><img src="https://img.icons8.com/color/48/null/facebook-new.png" alt="Facebook" /></li>
                <li><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="Instagram" /></li>
                <li><img src="https://img.icons8.com/color/48/null/twitter--v1.png" alt="Twitter" /></li>
                <li><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" alt="LinkedIn" /></li>
                <li><img src="https://img.icons8.com/color/48/null/youtube-play.png" alt="YouTube" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
