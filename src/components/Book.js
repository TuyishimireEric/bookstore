/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8bHEqSbfdyYUuS4cM1PJ/books/';
  async function remove(id) {
    dispatch(removeBook(id));
    await axios.delete(`${apiUrl}${id}`);
  }
  return (
    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => remove(id)}>Remove</button>
    </div>
  );
}

export default Book;
