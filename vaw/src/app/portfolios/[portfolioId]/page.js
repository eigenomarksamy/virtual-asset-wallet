"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TransactionForm from '../../components/TransactionForm';

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();
  const { portfolioId } = router.query;

  // Fetch the portfolio and transactions when the page loads
  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!portfolioId) return;

      const res = await fetch(`/api/portfolios/${portfolioId}`);
      if (res.ok) {
        const data = await res.json();
        setPortfolio(data.portfolio);
        setTransactions(data.transactions);
      } else {
        console.error('Portfolio not found');
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  // Add transaction to the portfolio
  const addTransaction = async (transaction) => {
    const res = await fetch(`/api/portfolios/${portfolioId}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });

    if (res.ok) {
      const newTransaction = await res.json();
      setTransactions([...transactions, newTransaction]);
    } else {
      console.error("Failed to add transaction");
    }
  };

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div>
      <h1>{portfolio.name} {portfolio.isActual ? '(Actual)' : ''}</h1>

      <TransactionForm addTransaction={addTransaction} />

      <h2>Transactions</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>{tx.description} - {tx.amount} @ {tx.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
