import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>My Virtual Asset Wallet</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Portfolio</a></li>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Settings</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    fontSize: '1rem',
  },
  navLink: {
    color: '#aaa',
    textDecoration: 'none',
  },
};

export default Navbar;
