import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import './App.css';


function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", description: "A journey of self-discovery." },
    { id: 2, title: "1984", author: "George Orwell", genre: "Sci-Fi", description: "Dystopian future surveillance state." },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", description: "History of humankind." }
  ]);

  const addBook = (book) => {
    const newBook = { ...book, id: books.length + 1 };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBooks books={books} />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
