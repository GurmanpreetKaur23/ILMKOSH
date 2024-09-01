import React, { useState, useEffect } from 'react';
import { Books } from '../bookshelf';
import axios from 'axios';

const Romance = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [iframeError, setIframeError] = useState(false);
  const [books, setBooks] = useState([]); // Create a state to store the books

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=mystery&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`);
        setBooks(response.data.items); // Update the books state
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks(); // Call fetchBooks every time the component mounts
  }, []); // The empty dependency array ensures that the effect is only run once, when the component mounts

  const handleReadClick = (book) => {
    setSelectedBook(book);
    setIframeError(false); // Reset error state when a new book is selected
  };

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
            grid-row: 4;
            border-radius: 10px;
            border: 2px solid #D8C3A5;
            background-color: #D8C3A5;
            padding: 5px 10px;
          }
          
          .book-item img {
            width: auto;
            max-height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }
          
          .book-item h3 {
            font-size: 1em;
            flex-wrap: wrap;
            margin-top: 10px;
          }
          
          .book-item p {
            font-size: 0.9em;
            color: #666;
          }
          
          /* adjust grid columns based on screen width */
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
            width: 200px; /* adjust the width to your liking */
        }

        .pdf-container {
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

        .pdf-container iframe {
          width: 80%;
          height: 80%;
        }

        .pdf-container button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #D8C3A5;
          border: none;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
        }

        .error-message {
          color: white;
          font-size: 1.5em;
        }
        `}
      </style>
      <h1 style={{ fontFamily: "Italianno, system-ui",color:"#D8C3A5",fontWeight:"550",fontSize:"50px",textAlign:"center"}}>Mystery Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3 className="booktitle">
              {book.volumeInfo.title}
            </h3>
            <p className="booktitle">{book.volumeInfo.authors?.join(', ')}</p>
            <button onClick={() => handleReadClick(book)}>Read</button>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="pdf-container">
          {iframeError ? (
            <div className="error-message">Unable to load the book preview.</div>
          ) : (
            <iframe
              src={selectedBook.volumeInfo.previewLink}
              frameBorder="0"
              title={selectedBook.volumeInfo.title}
              onError={() => setIframeError(true)}
            ></iframe>
          )}
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Romance;