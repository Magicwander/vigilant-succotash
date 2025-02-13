import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FlowerBouquets from './FlowerBouquets';

const FlowersSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div>
      <section className="flowers-search text-center">
        <div className="container">
          <h2 style={{ background: '#44bd32' }}>
            Flowers on your search: <span className="text-white">"{query}"</span>
          </h2>
        </div>
      </section>
      
      {/* Reuse FlowerBouquets component with search filter */}
      <FlowerBouquets searchQuery={query} />
    </div>
  );
};

export default FlowersSearchResults;
