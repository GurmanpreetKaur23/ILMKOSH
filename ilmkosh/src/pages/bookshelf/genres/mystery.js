import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Romance = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=mystery&key=AIzaSyCSvSsw52clyt8ozO8HuXn6u6H7_PwtfOU&maxResults=39");
        const filteredBooks = response.data.items.filter(book => book.volumeInfo.imageLinks?.thumbnail);
        
        // Log the fetched book details
        console.log('Fetched Books:', filteredBooks);
        
        setBooks(filteredBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleReadClick = useCallback((book) => {
    setSelectedBook(book);
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedBook(null);
  }, []);

  const handleOpenPreview = useCallback(() => {
    if (selectedBook?.volumeInfo?.previewLink) {
      window.open(selectedBook.volumeInfo.previewLink, '_blank');
    }
    setSelectedBook(null);
  }, [selectedBook]);

  return (
    <div className='Main'>
      <style>
        {`
          .books-list {
            display: grid;
            grid-gap: 20px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .book-item:hover {
            transform: scale(1.1);
          }
          .book-item {
            background-color: #F0E2C6;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            display: grid;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            z-index: 2;
            grid-template-rows: auto 1fr auto;
            justify-items: center;
          }
          .book-item button {
            border-radius: 10px;
            border: 2px solid #D8C3A5;
            background-color: #D8C3A5;
            padding: 5px 10px;
          }
          .book-item img {
            width: auto;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
          }
          .book-item h3 {
            font-size: 1em;
            margin-top: 10px;
          }
          .book-item p {
            font-size: 0.9em;
            color: #666;
          }
          @media (min-width: 1200px) {
            .books-list {
              grid-template-columns: repeat(6, 1fr);
            }
          }
          @media (min-width: 768px) and (max-width: 1199px) {
            .books-list {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          @media (max-width: 767px) {
            .books-list {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .booktitle {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 200px;
          }
          .popup-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
          }
          .popup-content {
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            width: 80%;
            max-width: 600px;
            max-height: 80%;
            overflow-y: auto;
            position: relative;
          }
          .popup-content button {
            margin-top: 10px;
            background-color: #D8C3A5;
            border: none;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
          }
          .popup-content h2 {
            margin-top: 0;
          }
          .popup-content p {
            font-size: 1.1em;
            margin-top: 20px;
          }
        `}
      </style>
      <h1 style={{ fontFamily: "Italianno, system-ui", color: "#D8C3A5", fontWeight: "550", fontSize: "50px", textAlign: "center" }}>
        Mystery Books
      </h1>
      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-item">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                onError={(e) => e.target.style.display = 'none'} // Hide the image if an error occurs
              />
              <h3 className="booktitle">
                {book.volumeInfo.title}
              </h3>
              <p className="booktitle">{book.volumeInfo.authors?.join(', ')}</p>
              <button onClick={() => handleReadClick(book)}>Read</button>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
      {selectedBook && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>{selectedBook.volumeInfo.title}</h2>
            <p>{selectedBook.volumeInfo.description || 'No description available.'}</p>
            <button onClick={handleOpenPreview}>Open Preview in New Tab</button>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Romance;