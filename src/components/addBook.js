import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function newTitle(e) {
    setTitle(e.target.value);
  }

  function newAuthor(e) {
    setAuthor(e.target.value);
  }

  const addData = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const id = uuidv4();
      dispatch(addBookApi({ id, title, author }));
      e.target.reset();
    }
  };

  return (
    <>
      <h3>Add New Book</h3>
      <form className="add" onSubmit={addData}>
        <input type="text" placeholder="Enter Book title Here" onChange={newTitle} required />
        <input type="text" placeholder="Enter author Here" onChange={newAuthor} required />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
