/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();

  const removeClicked = (id) => {
    dispatch(removeBookApi(id));
  };
  return (
    <div className="book">
      <section className="book-1">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <section className="buttons">
          <button type="button">Comments</button>
          <span />
          <button type="button" onClick={() => removeClicked(id)}>
            Remove
          </button>
          <span />
          <button type="button">Edit</button>
        </section>
      </section>
      <section className="book-2">
        <div className="progress" />
        <div className="perc">
          <p className="percent">0%</p>
          <p className="comp">completed</p>
        </div>
      </section>
      <span className="divider" />
      <section className="book-3">
        <p className="chapt-hd">CURRENT CHAPTER</p>
        <p>Introduction</p>
        <button type="submit" className="update">Update progress</button>
      </section>
    </div>
  );
}

export default Book;
