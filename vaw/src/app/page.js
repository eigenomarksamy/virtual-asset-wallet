// src/app/page.js
"use client";

import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Dashboard />
      <button onClick={toggleFormVisibility} style={styles.addButton}>
        {isFormVisible ? 'Cancel' : 'Add Transaction'}
      </button>
      {isFormVisible && <TransactionForm addTransaction={addTransaction} toggleFormVisibility={toggleFormVisibility} />}
      <TransactionTable transactions={transactions} />
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
