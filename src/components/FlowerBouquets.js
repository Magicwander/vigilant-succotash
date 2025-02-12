import React from 'react';
import { Link } from 'react-router-dom';

const FlowerBouquets = () => {
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

  return (
    <section className="flower-bouquets">
      <div className="container">
        <h2 className="text-center">flower-bouquets</h2>
        <div className="heading-border"></div>
        <div className="grid-2">
          {flowers.map((flower) => (
            <div key={flower.id} className="flower-bouquets-box">
              <div className="flower-bouquets-img">
                <img src={flower.image} alt={flower.name} className="img-responsive img-curve" />
              </div>
              <div className="flower-bouquets-desc">
                <h4>{flower.name}</h4>
                <p className="flower-bouquet-price">{flower.price}</p>
                <p className="flower-bouquets-details">{flower.details}</p>
                <button className="btn-primary">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center">
          <Link to="/flowers" className="btn-primary">See All Flowers</Link>
        </p>
      </div>
    </section>
  );
};

export default FlowerBouquets;
