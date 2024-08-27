import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <div style={styles.card}>
        <h2>Total Portfolio Value</h2>
        <p>-</p>
      </div>
      <div style={styles.card}>
        <h2>Cash-out Estimate</h2>
        <p>-</p>
      </div>
      <div style={styles.card}>
        <h2>Profit (%)</h2>
        <p>-</p>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    padding: '2rem',
  },
  card: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default Dashboard;
