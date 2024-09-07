// src/app/components/TransactionForm.js
"use client";

import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
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
      addTransaction({ type, kind, symbol, exchange, currency, price: parseFloat(price),
        fees: parseFloat(fees), amount: parseFloat(amount), description, platform });

      // Reset fields after submission
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
    <form onSubmit={handleSubmit}>
      {/* Form inputs remain the same */}
      {/* Add your inputs here */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
