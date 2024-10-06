"use client";
import React, { useState } from 'react';

const PortfolioForm = ({ onAddPortfolio }) => {
  const [name, setName] = useState('');
  const [isReal, setIsReal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolioData = { name, isReal };
    onAddPortfolio(portfolioData);
    setName(''); // Clear form after submission
    setIsReal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Portfolio Name"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isReal}
          onChange={(e) => setIsReal(e.target.checked)}
        />
        Real Portfolio
      </label>
      <button type="submit">Add Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
