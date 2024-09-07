// src/app/components/PortfolioForm.js
"use client";

import React, { useState } from "react";

const PortfolioForm = ({ addPortfolio }) => {
  const [name, setName] = useState("");
  const [isActual, setIsActual] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPortfolio = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      isActual,
    };

    console.log("New Portfolio to Add:", newPortfolio); // Debugging

    // Retrieve existing portfolios from localStorage
    const storedPortfolios = JSON.parse(localStorage.getItem("portfolios")) || [];
    console.log("Stored Portfolios before adding:", storedPortfolios); // Debugging

    // Add new portfolio to the list
    const updatedPortfolios = [...storedPortfolios, newPortfolio];
    
    // Save updated portfolios list to localStorage
    localStorage.setItem("portfolios", JSON.stringify(updatedPortfolios));

    console.log("Updated Portfolios:", updatedPortfolios); // Debugging

    // Reset form fields
    setName("");
    setIsActual(false);

    // Call parent handler to update the state
    addPortfolio(newPortfolio);
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
        Is Actual?
      </label>
      <button type="submit">Add Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
