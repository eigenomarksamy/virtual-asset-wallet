"use client";

import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const addPortfolio = () => {
    const newPortfolio = {
      id: portfolios.length + 1,
      name: `Portfolio ${portfolios.length + 1}`,
      transactions: []
    };
    setPortfolios([...portfolios, newPortfolio]);
    setCurrentPortfolio(newPortfolio);
  };

  const addTransaction = (transaction) => {
    if (currentPortfolio) {
      const updatedPortfolio = { 
        ...currentPortfolio, 
        transactions: [...currentPortfolio.transactions, transaction] 
      };
      setPortfolios(portfolios.map(portfolio => 
        portfolio.id === currentPortfolio.id ? updatedPortfolio : portfolio
      ));
      setCurrentPortfolio(updatedPortfolio);
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      <h1>Portfolios</h1>
      <button onClick={addPortfolio} style={styles.addButton}>Create New Portfolio</button>
      
      {currentPortfolio && (
        <>
          <h2>{currentPortfolio.name}</h2>
          <button onClick={toggleFormVisibility} style={styles.addButton}>
            {isFormVisible ? 'Cancel' : 'Add Transaction'}
          </button>
          {isFormVisible && <TransactionForm addTransaction={addTransaction} toggleFormVisibility={toggleFormVisibility} />}
          <TransactionTable transactions={currentPortfolio.transactions} />
        </>
      )}
      
      {!currentPortfolio && (
        <p>No portfolio selected. Create a new portfolio to get started.</p>
      )}
    </div>
  );
}

const styles = {
  addButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    margin: '1rem 0',
  },
};
