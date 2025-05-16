import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", width: "200px" }}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
