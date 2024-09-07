// src/app/portfolios/[portfolioId]/page.js
"use client";

import React, { useState, useEffect } from "react";
import TransactionForm from "../../components/TransactionForm";
import { useRouter } from "next/navigation";

const PortfolioDetailPage = ({ params }) => {
  const router = useRouter();
  const { portfolioId } = params;
  const [portfolio, setPortfolio] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedPortfolios = JSON.parse(localStorage.getItem("portfolios")) || [];
    const foundPortfolio = storedPortfolios.find((p) => p.id === parseInt(portfolioId));
    
    if (foundPortfolio) {
      setPortfolio(foundPortfolio);
      // Retrieve transactions for this portfolio
      const storedTransactions = JSON.parse(localStorage.getItem(`transactions_${portfolioId}`)) || [];
      setTransactions(storedTransactions);
    } else {
      console.error(`Portfolio not found for ID: ${portfolioId}`);
      router.push("/portfolios");  // Redirect if portfolio not found
    }
  }, [portfolioId, router]);

  const addTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    localStorage.setItem(`transactions_${portfolioId}`, JSON.stringify(newTransactions));
  };

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div>
      <h2>{portfolio.name} - {portfolio.isActual ? "Actual" : "Simulated"}</h2>
      <TransactionForm addTransaction={addTransaction} />
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.type}: {transaction.amount} at ${transaction.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioDetailPage;
