/* eslint-disable max-len */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './addBook';
import Book from './Book';
import { fetchBookApi } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

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
