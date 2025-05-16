import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BookCard from '../components/BookCard';

const BrowseBooks = ({ books }) => {
  const { category } = useParams(); // dynamic route param
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browse Books {category ? `(${category})` : ''}</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '100%' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
