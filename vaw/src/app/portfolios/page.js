"use client";

import React, { useEffect, useState } from "react";
import PortfolioForm from "../components/PortfolioForm";

const PortfoliosPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const storedPortfolios = JSON.parse(localStorage.getItem("portfolios")) || [];
    setPortfolios(storedPortfolios);
  }, []);

  const addPortfolio = (newPortfolio) => {
    setPortfolios((prevPortfolios) => [...prevPortfolios, newPortfolio]);
  };

  return (
    <div>
      <h2>Portfolios</h2>
      <PortfolioForm addPortfolio={addPortfolio} />
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            {portfolio.name} - {portfolio.isActual ? "Actual" : "Simulated"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfoliosPage;
