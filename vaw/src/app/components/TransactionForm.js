// src/app/components/TransactionForm.js
"use client";

import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, toggleFormVisibility }) => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && amount && description) {
      addTransaction({ type, amount: parseFloat(amount), description });
      setType('');
      setAmount('');
      setDescription('');
      toggleFormVisibility();  // Hide form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        style={styles.input}
        required
      >
        <option value="">Select Type</option>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
        style={styles.input}
        required
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Add Transaction</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem 0',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default TransactionForm;
