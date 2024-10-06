"use client";
import React, { useEffect, useState } from "react";
import { getPortfolios, createPortfolio } from '../api/api';
import PortfolioForm from "../components/portfolios/PortfolioForm";

const PortfoliosPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await getPortfolios();
      console.log("Portfolios fetched: ", response.data); // Log to check the data
      setPortfolios(response.data);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  const handleAddPortfolio = async (portfolioData) => {
    try {
      await createPortfolio(portfolioData);
      fetchPortfolios(); // Refresh the portfolio list
    } catch (error) {
      console.error("Error adding portfolio:", error);
    }
  };

  return (
    <div>
      <h1>Portfolios</h1>
      <PortfolioForm onAddPortfolio={handleAddPortfolio} />
      
      {portfolios.length > 0 ? (
        <ul>
          {portfolios.map((portfolio) => (
            <li key={portfolio.id}>
              <a href={`/portfolios/${portfolio.id}`}>{portfolio.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No portfolios found. Add a new portfolio.</p>
      )}
    </div>
  );
};
export default PortfoliosPage;
