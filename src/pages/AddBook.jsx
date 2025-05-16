import React, { useState } from "react";

const AddBook = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addBook function from props
    if (addBook) {
      addBook(formData);
    }

    alert("Book added successfully!");

    setFormData({
      title: "",
      author: "",
      genre: "",
      description: "",
    });
  };

  return (
    <div className="add-book-page" style={{ padding: "20px" }}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        /><br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
