/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
import { React, useState } from 'react';
import addBook from './addBook';
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

      <h3>Add New Book</h3>
      <form className="add">
        <input type="text" placeholder="Enter Book title Here" />
        <select name="cars" id="cars">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="button" type="button">Add Book</button>
      </form>
    </>
  );
};

export default Books;
