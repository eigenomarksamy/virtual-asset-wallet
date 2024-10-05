"use client";

import React, { useEffect, useState } from "react";
import PortfolioForm from "../components/PortfolioForm";
import Link from "next/link";

const PortfoliosPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  // Fetch portfolios when the component mounts
  useEffect(() => {
    const fetchPortfolios = async () => {
      const res = await fetch('/api/portfolios');
      if (res.ok) {
        const data = await res.json();
        setPortfolios(data);
      } else {
        console.error('Failed to fetch portfolios');
      }
    };

    fetchPortfolios();
  }, []);

  // Add portfolio to the state after it's created
  const addPortfolio = (newPortfolio) => {
    setPortfolios([...portfolios, newPortfolio]);
  };

  return (
    <div>
      <h1>Portfolios</h1>
      <PortfolioForm addPortfolio={addPortfolio} />

      <ul>
        {portfolios.map(portfolio => (
          <li key={portfolio.id}>
            {portfolio.name} {portfolio.isActual ? '(Actual)' : ''}
            <Link href={`/portfolios/${portfolio.id}`}>
              <button>View Portfolio</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfoliosPage;
