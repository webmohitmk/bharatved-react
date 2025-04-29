import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
    const styles = {
        header: {
          backgroundColor: '#333',
          padding: '10px 20px',
          color: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        navList: {
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
        },
        navItem: {
          margin: 0,
        },
        link: {
          color: '#fff',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          transition: 'color 0.3s ease',
        },
        linkHover: {
          color: '#61dafb', // Change color on hover
        },
      };
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.link}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/products" style={styles.link}>Products</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={styles.link}>Login</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/register" style={styles.link}>Register</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/cart" style={styles.link}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Styles for the header
const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;