import React from 'react';
import FlowerSearch from './FlowerSearch';
import FlowerBouquets from './FlowerBouquets';

const Home = () => {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/images/bg.jpg`} className="bg" alt="Background" />
      <FlowerSearch />
      <FlowerBouquets />
    </>
  );
};

export default Home;
