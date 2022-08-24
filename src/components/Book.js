/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
}

export default Book;
