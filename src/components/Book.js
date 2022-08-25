/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const removeClicked = (id) => {
    dispatch(removeBookApi(id));
  };
  return (
    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => removeClicked(id)}>Remove</button>
    </div>
  );
}

export default Book;
