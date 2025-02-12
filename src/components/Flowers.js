import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Flowers = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const flowers = [
    {
      id: 1,
      name: 'Pink Rose',
      price: 'LKR8000',
      image: `${process.env.PUBLIC_URL}/images/p1.jpg`,
      details: 'Soft, sweet, and full of love! Our pink roses are perfect for expressing admiration and gratitude. 🌷💖 #BlushBeauty'
    },
    {
      id: 2,
      name: 'Red Rose',
      price: 'LKR8000',
      image: `${process.env.PUBLIC_URL}/images/s1.jpg`,
      details: 'The timeless symbol of love and passion! Say it all with the elegance of a red rose. ❤️🔥 #ForeverLove'
    },
    {
      id: 3,
      name: 'Blue Rose',
      price: 'LKR8000',
      image: `${process.env.PUBLIC_URL}/images/b1.jpg`,
      details: 'A rare and enchanting beauty! Blue roses symbolize mystery and the impossible. ✨💙 #DreamInBlue'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // You can implement more sophisticated search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleAddToCart = (flower) => {
    addToCart(flower);
    alert(`${flower.name} added to cart!`);
  };

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    flower.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} className="bg" alt="Background" />
      <div style={{ height: '80px' }}></div>

      <section className="flowers-search text-center">
        <div className="container">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search for flowers..."
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input type="submit" value="Search" className="btn-primary" />
          </form>
        </div>
      </section>

      <section className="flower-bouquets">
        <div className="container">
          <h2 className="text-center">flower-bouquets</h2>
          <div className="heading-border"></div>
          <div className="grid-2">
            {filteredFlowers.map((flower) => (
              <div key={flower.id} className="flower-bouquets-box">
                <div className="flower-bouquets-img">
                  <img src={flower.image} alt={flower.name} className="img-responsive img-curve" />
                </div>
                <div className="flower-bouquets-desc">
                  <h4>{flower.name}</h4>
                  <p className="flower-bouquet-price">{flower.price}</p>
                  <p className="flower-bouquets-details">{flower.details}</p>
                  <button
                    onClick={() => handleAddToCart(flower)}
                    className="btn-primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Flowers;
