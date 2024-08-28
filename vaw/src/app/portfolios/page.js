"use client";

import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isAddPortfolioVisible, setAddPortfolioVisible] = useState(false);
  const [newPortfolioName, setNewPortfolioName] = useState('');
  const [isActualPortfolio, setIsActualPortfolio] = useState(false);

  const handlePortfolioSubmit = (e) => {
    e.preventDefault();
    addPortfolio();
    setNewPortfolioName('');
    setIsActualPortfolio(false);
    setAddPortfolioVisible(false);
  };

  const addPortfolio = () => {
    const newPortfolio = {
      id: portfolios.length + 1,
      name: newPortfolioName || `Portfolio ${portfolios.length + 1}`,
      isActual: isActualPortfolio,
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
      {!isAddPortfolioVisible && (
        <button onClick={() => setAddPortfolioVisible(true)} style={styles.addButton}>
          Create New Portfolio
        </button>
      )}
      
      {isAddPortfolioVisible && (
        <form onSubmit={handlePortfolioSubmit} style={styles.portfolioForm}>
          <div style={styles.formGroup}>
            <label>Portfolio Name:</label>
            <input 
              type="text" 
              value={newPortfolioName} 
              onChange={(e) => setNewPortfolioName(e.target.value)} 
              required 
            />
          </div>
          <div style={styles.formGroup}>
            <label>
              <input 
                type="checkbox" 
                checked={isActualPortfolio} 
                onChange={(e) => setIsActualPortfolio(e.target.checked)} 
              /> Is this an actual portfolio?
            </label>
          </div>
          <button type="submit" style={styles.addButton}>Add Portfolio</button>
        </form>
      )}
      
      {currentPortfolio && (
        <>
          <h2>{currentPortfolio.name}</h2>
          {currentPortfolio.isActual && <p>This is an actual portfolio.</p>}
          <button onClick={toggleFormVisibility} style={styles.addButton}>
            {isFormVisible ? 'Cancel' : 'Add Transaction'}
          </button>
          {isFormVisible && <TransactionForm addTransaction={addTransaction} toggleFormVisibility={toggleFormVisibility} />} {/* Pass toggleFormVisibility as prop */}
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
  portfolioForm: {
    margin: '1rem 0',
    padding: '1rem',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  formGroup: {
    marginBottom: '1rem',
  }
};
