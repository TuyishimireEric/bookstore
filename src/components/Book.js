/* eslint-disable react/prop-types */
import React from 'react';

function Book({ title, author }) {
  return (
    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;
