"use client";

import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, toggleFormVisibility }) => {
  const [type, setType] = useState('');
  const [kind, setKind] = useState('');
  const [symbol, setSymbol] = useState('');
  const [exchange, setExchange] = useState('');
  const [currency, setCurrency] = useState('');
  const [price, setPrice] = useState('');
  const [fees, setFees] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && price && amount && description) {
      addTransaction({
        type,
        kind,
        symbol,
        exchange,
        currency,
        price: parseFloat(price),
        fees: parseFloat(fees),
        amount: parseFloat(amount),
        description,
        platform,
      });
      setType('');
      setKind('');
      setSymbol('');
      setExchange('');
      setCurrency('');
      setPrice('');
      setFees('');
      setAmount('');
      setDescription('');
      setPlatform('');
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
        <option value="Transfer">Transfer</option>
      </select>
      <select
        value={kind}
        onChange={(e) => setKind(e.target.value)}
        style={styles.input}
        required
      >
        <option value="">Select Kind</option>
        <option value="Stock">Stock</option>
        <option value="Crypto">Crypto</option>
        <option value="Option">Option</option>
        <option value="Forex">Forex</option>
        <option value="Commodity">Commodity</option>
        <option value="Bonds">Bonds</option>
        <option value="REITS">REITS</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Symbol"
        style={styles.input}
        required
      />
      <input
        type="text"
        value={exchange}
        onChange={(e) => setExchange(e.target.value)}
        placeholder="Exchange"
        style={styles.input}
        required
      />
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        placeholder="Currency"
        style={styles.input}
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        style={styles.input}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        style={styles.input}
        required
      />
      <input
        type="number"
        value={fees}
        onChange={(e) => setFees(e.target.value)}
        placeholder="Fees"
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
      <input
        type="text"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        placeholder="Platform"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Add Transaction</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
    gridColumn: 'span 2',
  },
};

export default TransactionForm;
