import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/browse" style={styles.link}>Browse Books</Link>
      <Link to="/add-book" style={styles.link}>Add Book</Link>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#222',
    padding: '10px',
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Navbar;
