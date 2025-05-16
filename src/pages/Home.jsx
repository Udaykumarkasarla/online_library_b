import BookCard from '../components/BookCard';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];

const popularBooks = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'Dune', author: 'Frank Herbert' }
];

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Online Library 📚</h1>

      <section>
        <h2>Book Categories</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Popular Books</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
