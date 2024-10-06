"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { getPortfolio, getTransactions, addTransaction } from '../../api/api';
import TransactionForm from "../../components/transactions/TransactionForm";
import TransactionTable from "../../components/transactions/TransactionTable";

const PortfolioDetail = () => {
  const router = useRouter();
  const { portfolioId } = router.query; // Grab the portfolio ID from the URL
  const [portfolio, setPortfolio] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (portfolioId) {
      fetchPortfolioData();
    }
  }, [portfolioId]);

  const fetchPortfolioData = async () => {
    try {
      const response = await getPortfolio(portfolioId);
      setPortfolio(response.data);
      const transactionResponse = await getTransactions(portfolioId);
      setTransactions(transactionResponse.data);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  const handleAddTransaction = async (transactionData) => {
    try {
      await addTransaction(portfolioId, transactionData);
      fetchPortfolioData(); // Refresh transaction list
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div>
      {portfolio ? (
        <>
          <h1>{portfolio.name} (Real: {portfolio.isReal ? "Yes" : "No"})</h1>
          <TransactionForm onAddTransaction={handleAddTransaction} />
          <TransactionTable transactions={transactions} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PortfolioDetail;
