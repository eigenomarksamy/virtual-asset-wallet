// src/app/components/PortfolioForm.js
"use client";

import React, { useState } from 'react';

const PortfolioForm = ({ addPortfolio }) => {
  const [name, setName] = useState('');
  const [isActual, setIsActual] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API request to backend to create portfolio
    const res = await fetch('/api/portfolios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, isActual }),
    });

    if (res.ok) {
      const newPortfolio = await res.json();
      addPortfolio(newPortfolio);  // Add portfolio to the state in parent component
      setName('');  // Clear the form
      setIsActual(false);
    } else {
      console.error("Failed to create portfolio");
    }
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
          checked={isActual} 
          onChange={(e) => setIsActual(e.target.checked)} 
        />
        Actual Portfolio
      </label>
      <button type="submit">Create Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
