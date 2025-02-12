import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlowerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/flowers-search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="flowers-search text-center">
      <div className="container">
        <form onSubmit={handleSubmit}>
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
  );
};

export default FlowerSearch;
