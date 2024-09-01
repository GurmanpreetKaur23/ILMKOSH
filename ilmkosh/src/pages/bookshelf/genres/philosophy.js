import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Romance = () => {
  // State to store books data
  const [books, setBooks] = useState([]);

  // Fetch books data using axios
  useEffect(() => {
    axios.get('API_ENDPOINT') // Replace with your actual API endpoint
      .then(response => {
        // Assuming the books data is in response.data.items
        setBooks(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching books data:', error);
      });
  }, []);

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
          
          .book-item {
            background-color: #F0E2C6;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            display: grid;
            grid-template-rows: auto 1fr auto;
            justify-items: center;
          }

          .book-item button {
            grid-row: 4;
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

          .booktitle:hover {
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
            width: auto;
          }
        `}
      </style>
      <h1 style={{ fontFamily: "Italianno, system-ui",color:"#D8C3A5",fontWeight:"550",fontSize:"50px",textAlign:"center"}}>Philosophy Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3 className="booktitle">
              {book.volumeInfo.title}
            </h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Romance;
