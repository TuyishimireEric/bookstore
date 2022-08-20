import { React, useState } from 'react';
import AddBook from './addBook';
import Book from './Book';

const Books = () => {
  const [allBooks] = useState([
    {
      id: '1',
      title: 'React documentation',
      author: 'Paul gentil',
    },
  ]);
  return (
    <>
      <div className="allbooks">
        {allBooks.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      </div>

      <AddBook />
    </>
  );
};

export default Books;
