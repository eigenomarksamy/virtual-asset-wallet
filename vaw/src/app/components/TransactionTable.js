// src/app/components/TransactionTable.js
"use client";

import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Type</th>
          <th style={styles.th}>Kind</th>
          <th style={styles.th}>Symbol</th>
          <th style={styles.th}>Exchange</th>
          <th style={styles.th}>Currency</th>
          <th style={styles.th}>Price</th>
          <th style={styles.th}>Fees</th>
          <th style={styles.th}>Amount</th>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>Platform</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td style={styles.td}>{transaction.type}</td>
            <td style={styles.td}>{transaction.kind}</td>
            <td style={styles.td}>{transaction.symbol}</td>
            <td style={styles.td}>{transaction.exchange}</td>
            <td style={styles.td}>{transaction.currency}</td>
            <td style={styles.td}>{transaction.price}</td>
            <td style={styles.td}>{transaction.fees}</td>
            <td style={styles.td}>{transaction.amount}</td>
            <td style={styles.td}>{transaction.description}</td>
            <td style={styles.td}>{transaction.platform}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

export default TransactionTable;
