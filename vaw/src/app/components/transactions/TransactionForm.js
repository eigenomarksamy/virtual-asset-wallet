"use client";
import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
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
    onAddTransaction({
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
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your input fields here */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
