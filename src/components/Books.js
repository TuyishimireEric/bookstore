/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="allbooks">
        {books.map(
          (book) => <Book key={book.id} id={book.id} title={book.title} author={book.author} />,
        )}
      </div>

      <AddBook />
    </>
  );
};

export default Books;
