import { useParams, Link } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Book not found</h2>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
      {book.rating && <p><strong>Rating:</strong> ⭐ {book.rating}</p>}
      <br />
      <Link to="/browse" style={{ color: 'blue' }}>← Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
